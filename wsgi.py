import json
import sqlite3
import os
import mimetypes
import secrets
import http.cookies
import threading
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

DATA_DIR = os.environ.get('DATA_DIR', os.path.dirname(os.path.abspath(__file__)))
DB_PATH = os.path.join(DATA_DIR, 'catalogue.db')
STATIC_DIR = os.path.dirname(os.path.abspath(__file__))
PASSWORD = os.environ.get('CATALOGUE_PASSWORD', 'duc1106')
SALES_PASSWORD = os.environ.get('SALES_PASSWORD', 'enspire8861')
NOTIFY_EMAIL = os.environ.get('NOTIFY_EMAIL', '')
GMAIL_USER = os.environ.get('GMAIL_USER', '')
GMAIL_APP_PASS = os.environ.get('GMAIL_APP_PASS', '')

active_sessions = set()
booking_sessions = {}  # token -> {'role': 'admin'|'sales', 'name': str}

PUBLIC_PATHS = {'/login.html', '/styles.css', '/logo.png'}
BOOKING_PUBLIC_PATHS = {'/book-login.html', '/styles.css', '/logo.png'}
BOOKING_PROTECTED_PATHS = {'/bookings.html', '/book.html'}

NEW_COLUMNS = [
    'gender', 'phone',
    'handle_ig', 'handle_tiktok', 'handle_fb', 'handle_yt', 'handle_xhs',
    'url_ig', 'url_tiktok', 'url_fb', 'url_yt', 'url_xhs',
    'ig_followers_raw', 'tiktok_followers_raw', 'fb_followers_raw', 'yt_followers_raw', 'xhs_followers_raw',
    'rate_ig_story_min', 'rate_ig_story_max', 'rate_ig_story_notes',
    'rate_ig_post_min', 'rate_ig_post_max', 'rate_ig_post_notes',
    'rate_ig_carousel_min', 'rate_ig_carousel_max', 'rate_ig_carousel_notes',
    'rate_ig_reel_min', 'rate_ig_reel_max', 'rate_ig_reel_notes',
    'rate_tiktok_video_min', 'rate_tiktok_video_max', 'rate_tiktok_video_notes',
    'rate_tiktok_carousel_min', 'rate_tiktok_carousel_max', 'rate_tiktok_carousel_notes',
    'rate_tiktok_story_min', 'rate_tiktok_story_max', 'rate_tiktok_story_notes',
    'rate_fb_video_min', 'rate_fb_video_max', 'rate_fb_video_notes',
    'rate_fb_photo_min', 'rate_fb_photo_max', 'rate_fb_photo_notes',
    'rate_yt_video_min', 'rate_yt_video_max', 'rate_yt_video_notes',
    'rate_xhs_video_min', 'rate_xhs_video_max', 'rate_xhs_video_notes',
    'rate_xhs_photo_min', 'rate_xhs_photo_max', 'rate_xhs_photo_notes',
]

FIELDS = [
    'name', 'gender', 'ig_followers', 'tiktok_followers', 'fb_followers',
    'xhs_followers', 'yt_followers',
    'ig_followers_raw', 'tiktok_followers_raw', 'fb_followers_raw',
    'yt_followers_raw', 'xhs_followers_raw',
    'handle_ig', 'handle_tiktok', 'handle_fb', 'handle_yt', 'handle_xhs',
    'url_ig', 'url_tiktok', 'url_fb', 'url_yt', 'url_xhs',
    'rate_ig_story_min', 'rate_ig_story_max', 'rate_ig_story_notes',
    'rate_ig_post_min', 'rate_ig_post_max', 'rate_ig_post_notes',
    'rate_ig_carousel_min', 'rate_ig_carousel_max', 'rate_ig_carousel_notes',
    'rate_ig_reel_min', 'rate_ig_reel_max', 'rate_ig_reel_notes',
    'rate_tiktok_video_min', 'rate_tiktok_video_max', 'rate_tiktok_video_notes',
    'rate_tiktok_carousel_min', 'rate_tiktok_carousel_max', 'rate_tiktok_carousel_notes',
    'rate_tiktok_story_min', 'rate_tiktok_story_max', 'rate_tiktok_story_notes',
    'rate_fb_video_min', 'rate_fb_video_max', 'rate_fb_video_notes',
    'rate_fb_photo_min', 'rate_fb_photo_max', 'rate_fb_photo_notes',
    'rate_yt_video_min', 'rate_yt_video_max', 'rate_yt_video_notes',
    'rate_xhs_video_min', 'rate_xhs_video_max', 'rate_xhs_video_notes',
    'rate_xhs_photo_min', 'rate_xhs_photo_max', 'rate_xhs_photo_notes',
    'content_style', 'email', 'phone', 'location', 'notes',
    'image', 'profile_photo'
]


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    conn.execute('''CREATE TABLE IF NOT EXISTS influencers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        ig_followers TEXT DEFAULT '',
        tiktok_followers TEXT DEFAULT '',
        fb_followers TEXT DEFAULT '',
        xhs_followers TEXT DEFAULT '',
        yt_followers TEXT DEFAULT '',
        rate_ig_story TEXT DEFAULT '',
        rate_ig_reel TEXT DEFAULT '',
        rate_tiktok TEXT DEFAULT '',
        rate_ig_post TEXT DEFAULT '',
        rate_ig_carousel TEXT DEFAULT '',
        content_style TEXT DEFAULT '',
        contact TEXT DEFAULT '',
        email TEXT DEFAULT '',
        location TEXT DEFAULT '',
        notes TEXT DEFAULT '',
        image TEXT DEFAULT '',
        profile_photo TEXT DEFAULT '',
        created TEXT DEFAULT ''
    )''')
    existing = {row[1] for row in conn.execute("PRAGMA table_info(influencers)").fetchall()}
    for col in NEW_COLUMNS:
        if col not in existing:
            conn.execute(f"ALTER TABLE influencers ADD COLUMN {col} TEXT DEFAULT ''")
    conn.execute('''CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sales_name TEXT NOT NULL,
        client_name TEXT NOT NULL,
        client_company TEXT DEFAULT '',
        meeting_purpose TEXT DEFAULT '',
        slot1 TEXT NOT NULL,
        slot2 TEXT NOT NULL,
        slot3 TEXT NOT NULL,
        status TEXT DEFAULT 'pending',
        confirmed_slot TEXT DEFAULT '',
        counter_slot TEXT DEFAULT '',
        admin_notes TEXT DEFAULT '',
        created_at TEXT DEFAULT '',
        updated_at TEXT DEFAULT ''
    )''')
    conn.commit()
    conn.close()


init_db()


def send_notification_email(booking_data):
    if not (NOTIFY_EMAIL and GMAIL_USER and GMAIL_APP_PASS):
        return
    def _send():
        try:
            msg = MIMEMultipart()
            msg['Subject'] = f"New Meeting Request: {booking_data['client_name']}"
            msg['From'] = GMAIL_USER
            msg['To'] = NOTIFY_EMAIL
            body = (
                f"New booking request received!\n\n"
                f"From: {booking_data['sales_name']}\n"
                f"Client: {booking_data['client_name']} ({booking_data['client_company']})\n"
                f"Purpose: {booking_data['meeting_purpose']}\n\n"
                f"Proposed time slots:\n"
                f"1. {booking_data['slot1']}\n"
                f"2. {booking_data['slot2']}\n"
                f"3. {booking_data['slot3']}\n\n"
                f"Log in to /bookings.html to review and respond."
            )
            msg.attach(MIMEText(body, 'plain'))
            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
                server.login(GMAIL_USER, GMAIL_APP_PASS)
                server.send_message(msg)
        except Exception as e:
            print(f'Booking email notification failed: {e}')
    threading.Thread(target=_send, daemon=True).start()


# ── Auth helpers ──────────────────────────────────────────────────────────────

def get_session_token(environ):
    cookies = http.cookies.SimpleCookie()
    try:
        cookies.load(environ.get('HTTP_COOKIE', ''))
    except http.cookies.CookieError:
        return None
    return cookies['session'].value if 'session' in cookies else None


def get_booking_session_token(environ):
    cookies = http.cookies.SimpleCookie()
    try:
        cookies.load(environ.get('HTTP_COOKIE', ''))
    except http.cookies.CookieError:
        return None
    return cookies['booking_session'].value if 'booking_session' in cookies else None


def is_authenticated(environ):
    token = get_session_token(environ)
    return bool(token and token in active_sessions)


def get_booking_session(environ):
    token = get_booking_session_token(environ)
    return booking_sessions.get(token) if token else None


# ── Response helpers ──────────────────────────────────────────────────────────

def cors_headers(content_type='application/json'):
    return [
        ('Content-Type', content_type),
        ('Access-Control-Allow-Origin', '*'),
        ('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'),
        ('Access-Control-Allow-Headers', 'Content-Type'),
    ]


def json_response(start_response, data, status='200 OK', extra_headers=None):
    body = json.dumps(data).encode('utf-8')
    headers = cors_headers()
    if extra_headers:
        headers.extend(extra_headers)
    start_response(status, headers)
    return [body]


def redirect_response(start_response, location):
    start_response('302 Found', [('Location', location)])
    return [b'']


def read_body(environ):
    length = int(environ.get('CONTENT_LENGTH', 0) or 0)
    body = environ['wsgi.input'].read(length) if length else b'{}'
    return json.loads(body)


# ── Catalogue handlers ────────────────────────────────────────────────────────

def handle_login(environ, start_response):
    data = read_body(environ)
    if data.get('password', '') == PASSWORD:
        token = secrets.token_hex(32)
        active_sessions.add(token)
        cookie = f'session={token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=604800'
        return json_response(start_response, {'ok': True}, extra_headers=[('Set-Cookie', cookie)])
    return json_response(start_response, {'error': 'Wrong password'}, '401 Unauthorized')


def handle_logout(environ, start_response):
    token = get_session_token(environ)
    if token:
        active_sessions.discard(token)
    cookie = 'session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0'
    return json_response(start_response, {'ok': True}, extra_headers=[('Set-Cookie', cookie)])


def handle_list(start_response):
    conn = get_db()
    rows = conn.execute('SELECT * FROM influencers ORDER BY created DESC').fetchall()
    conn.close()
    return json_response(start_response, [dict(r) for r in rows])


def handle_get_one(id_, start_response):
    conn = get_db()
    row = conn.execute('SELECT * FROM influencers WHERE id = ?', (id_,)).fetchone()
    conn.close()
    if row:
        return json_response(start_response, dict(row))
    return json_response(start_response, {'error': 'Not found'}, '404 Not Found')


def handle_create(environ, start_response):
    data = read_body(environ)
    if not data.get('name'):
        return json_response(start_response, {'error': 'Name is required'}, '400 Bad Request')
    values = {f: data.get(f, '') for f in FIELDS}
    values['created'] = datetime.utcnow().isoformat()
    conn = get_db()
    cursor = conn.execute(
        f"INSERT INTO influencers ({', '.join(values.keys())}) VALUES ({', '.join('?' for _ in values)})",
        list(values.values())
    )
    new_id = cursor.lastrowid
    conn.commit()
    conn.close()
    values['id'] = new_id
    return json_response(start_response, values, '201 Created')


def handle_delete(id_, start_response):
    conn = get_db()
    conn.execute('DELETE FROM influencers WHERE id = ?', (id_,))
    conn.commit()
    conn.close()
    return json_response(start_response, {'ok': True})


# ── Booking handlers ──────────────────────────────────────────────────────────

def handle_booking_login(environ, start_response):
    data = read_body(environ)
    password = data.get('password', '')
    name = data.get('name', '').strip()

    if password == PASSWORD:
        role, session_name = 'admin', 'Admin'
    elif password == SALES_PASSWORD:
        if not name:
            return json_response(start_response, {'error': 'Your name is required'}, '400 Bad Request')
        role, session_name = 'sales', name
    else:
        return json_response(start_response, {'error': 'Wrong password'}, '401 Unauthorized')

    token = secrets.token_hex(32)
    booking_sessions[token] = {'role': role, 'name': session_name}
    cookie = f'booking_session={token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=604800'
    return json_response(start_response, {'ok': True, 'role': role, 'name': session_name},
                         extra_headers=[('Set-Cookie', cookie)])


def handle_booking_logout(environ, start_response):
    token = get_booking_session_token(environ)
    if token:
        booking_sessions.pop(token, None)
    cookie = 'booking_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0'
    return json_response(start_response, {'ok': True}, extra_headers=[('Set-Cookie', cookie)])


def handle_list_bookings(environ, start_response):
    session = get_booking_session(environ)
    conn = get_db()
    if session['role'] == 'admin':
        rows = conn.execute('SELECT * FROM bookings ORDER BY created_at DESC').fetchall()
    else:
        rows = conn.execute(
            'SELECT * FROM bookings WHERE sales_name = ? ORDER BY created_at DESC',
            (session['name'],)
        ).fetchall()
    conn.close()
    return json_response(start_response, [dict(r) for r in rows])


def handle_create_booking(environ, start_response):
    session = get_booking_session(environ)
    if session['role'] != 'sales':
        return json_response(start_response, {'error': 'Only sales team can submit bookings'}, '403 Forbidden')
    data = read_body(environ)
    for f in ['client_name', 'slot1', 'slot2', 'slot3']:
        if not data.get(f):
            return json_response(start_response, {'error': f'{f} is required'}, '400 Bad Request')
    booking = {
        'sales_name': session['name'],
        'client_name': data.get('client_name', ''),
        'client_company': data.get('client_company', ''),
        'meeting_purpose': data.get('meeting_purpose', ''),
        'slot1': data.get('slot1', ''),
        'slot2': data.get('slot2', ''),
        'slot3': data.get('slot3', ''),
        'status': 'pending',
        'confirmed_slot': '',
        'counter_slot': '',
        'admin_notes': '',
        'created_at': datetime.utcnow().isoformat(),
        'updated_at': datetime.utcnow().isoformat(),
    }
    conn = get_db()
    cursor = conn.execute(
        '''INSERT INTO bookings (sales_name, client_name, client_company, meeting_purpose,
           slot1, slot2, slot3, status, confirmed_slot, counter_slot, admin_notes,
           created_at, updated_at)
           VALUES (:sales_name, :client_name, :client_company, :meeting_purpose,
           :slot1, :slot2, :slot3, :status, :confirmed_slot, :counter_slot, :admin_notes,
           :created_at, :updated_at)''',
        booking
    )
    booking['id'] = cursor.lastrowid
    conn.commit()
    conn.close()
    send_notification_email(booking)
    return json_response(start_response, booking, '201 Created')


def handle_update_booking(id_, environ, start_response):
    session = get_booking_session(environ)
    data = read_body(environ)
    action = data.get('action', '')
    now = datetime.utcnow().isoformat()

    conn = get_db()
    row = conn.execute('SELECT * FROM bookings WHERE id = ?', (id_,)).fetchone()
    if not row:
        conn.close()
        return json_response(start_response, {'error': 'Not found'}, '404 Not Found')
    booking = dict(row)

    if session['role'] == 'admin':
        if action == 'approve':
            slot_key = data.get('slot', 'slot1')
            if slot_key not in ('slot1', 'slot2', 'slot3'):
                conn.close()
                return json_response(start_response, {'error': 'Invalid slot'}, '400 Bad Request')
            conn.execute(
                'UPDATE bookings SET status=?, confirmed_slot=?, admin_notes=?, updated_at=? WHERE id=?',
                ('approved', booking[slot_key], data.get('admin_notes', ''), now, id_)
            )
        elif action == 'decline':
            conn.execute(
                'UPDATE bookings SET status=?, admin_notes=?, updated_at=? WHERE id=?',
                ('declined', data.get('admin_notes', ''), now, id_)
            )
        elif action == 'counter':
            counter_slot = data.get('counter_slot', '')
            if not counter_slot:
                conn.close()
                return json_response(start_response, {'error': 'counter_slot is required'}, '400 Bad Request')
            conn.execute(
                'UPDATE bookings SET status=?, counter_slot=?, admin_notes=?, updated_at=? WHERE id=?',
                ('counter_proposed', counter_slot, data.get('admin_notes', ''), now, id_)
            )
        else:
            conn.close()
            return json_response(start_response, {'error': 'Invalid action'}, '400 Bad Request')
    elif session['role'] == 'sales':
        if booking['sales_name'] != session['name']:
            conn.close()
            return json_response(start_response, {'error': 'Forbidden'}, '403 Forbidden')
        if action == 'accept_counter':
            conn.execute(
                'UPDATE bookings SET status=?, confirmed_slot=?, updated_at=? WHERE id=?',
                ('confirmed', booking['counter_slot'], now, id_)
            )
        elif action == 'decline_counter':
            conn.execute(
                'UPDATE bookings SET status=?, updated_at=? WHERE id=?',
                ('declined', now, id_)
            )
        else:
            conn.close()
            return json_response(start_response, {'error': 'Invalid action'}, '400 Bad Request')
    else:
        conn.close()
        return json_response(start_response, {'error': 'Unauthorized'}, '401 Unauthorized')

    conn.commit()
    updated = dict(conn.execute('SELECT * FROM bookings WHERE id = ?', (id_,)).fetchone())
    conn.close()
    return json_response(start_response, updated)


# ── Static file serving ───────────────────────────────────────────────────────

def serve_static(path, start_response):
    if path == '/':
        path = '/index.html'
    filepath = os.path.normpath(os.path.join(STATIC_DIR, path.lstrip('/')))
    if not filepath.startswith(STATIC_DIR) or not os.path.isfile(filepath):
        start_response('404 Not Found', [('Content-Type', 'text/plain')])
        return [b'Not Found']
    mime, _ = mimetypes.guess_type(filepath)
    if mime is None:
        mime = 'application/octet-stream'
    with open(filepath, 'rb') as f:
        content = f.read()
    start_response('200 OK', cors_headers(mime))
    return [content]


# ── Main WSGI application ─────────────────────────────────────────────────────

def application(environ, start_response):
    method = environ['REQUEST_METHOD']
    path = environ.get('PATH_INFO', '/')

    if method == 'OPTIONS':
        start_response('200 OK', cors_headers())
        return [b'']

    # ── Catalogue auth ──
    if path == '/api/auth/login' and method == 'POST':
        return handle_login(environ, start_response)
    if path == '/api/auth/logout' and method == 'POST':
        return handle_logout(environ, start_response)
    if path == '/api/auth/check' and method == 'GET':
        return json_response(start_response, {'authenticated': is_authenticated(environ)})

    # ── Booking auth ──
    if path == '/api/booking/auth/login' and method == 'POST':
        return handle_booking_login(environ, start_response)
    if path == '/api/booking/auth/logout' and method == 'POST':
        return handle_booking_logout(environ, start_response)
    if path == '/api/booking/auth/me' and method == 'GET':
        session = get_booking_session(environ)
        if session:
            return json_response(start_response, {'role': session['role'], 'name': session['name']})
        return json_response(start_response, {'error': 'Not authenticated'}, '401 Unauthorized')

    # ── Booking pages (protected) ──
    if path in BOOKING_PROTECTED_PATHS:
        if not get_booking_session(environ):
            return redirect_response(start_response, '/book-login.html')
        return serve_static(path, start_response)

    if path in BOOKING_PUBLIC_PATHS:
        return serve_static(path, start_response)

    # ── Booking API ──
    if path == '/api/bookings' and method == 'GET':
        session = get_booking_session(environ)
        if not session:
            return json_response(start_response, {'error': 'Unauthorized'}, '401 Unauthorized')
        return handle_list_bookings(environ, start_response)
    if path == '/api/bookings' and method == 'POST':
        session = get_booking_session(environ)
        if not session:
            return json_response(start_response, {'error': 'Unauthorized'}, '401 Unauthorized')
        return handle_create_booking(environ, start_response)
    if path.startswith('/api/bookings/') and method == 'PUT':
        session = get_booking_session(environ)
        if not session:
            return json_response(start_response, {'error': 'Unauthorized'}, '401 Unauthorized')
        return handle_update_booking(path.split('/')[-1], environ, start_response)

    # ── Public catalogue paths ──
    if path in PUBLIC_PATHS:
        return serve_static(path, start_response)

    # ── Protected catalogue ──
    if not is_authenticated(environ):
        if path.startswith('/api/'):
            return json_response(start_response, {'error': 'Unauthorized'}, '401 Unauthorized')
        return redirect_response(start_response, '/login.html')

    if path == '/api/influencers' and method == 'GET':
        return handle_list(start_response)
    elif path == '/api/influencers' and method == 'POST':
        return handle_create(environ, start_response)
    elif path.startswith('/api/influencers/') and method == 'GET':
        return handle_get_one(path.split('/')[-1], start_response)
    elif path.startswith('/api/influencers/') and method == 'DELETE':
        return handle_delete(path.split('/')[-1], start_response)
    else:
        return serve_static(path, start_response)
