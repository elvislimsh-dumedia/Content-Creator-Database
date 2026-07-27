import http.server
import json
import sqlite3
import os
import urllib.parse
import mimetypes
import hashlib
import secrets
import http.cookies
import threading
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'catalogue.db')
STATIC_DIR = os.path.dirname(os.path.abspath(__file__))
PORT = int(os.environ.get('PORT', 8080))
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

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

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


class CatalogueHandler(http.server.BaseHTTPRequestHandler):

    def get_session_token(self):
        cookie_header = self.headers.get('Cookie', '')
        cookies = http.cookies.SimpleCookie()
        try:
            cookies.load(cookie_header)
        except http.cookies.CookieError:
            return None
        if 'session' in cookies:
            return cookies['session'].value
        return None

    def get_booking_session_token(self):
        cookie_header = self.headers.get('Cookie', '')
        cookies = http.cookies.SimpleCookie()
        try:
            cookies.load(cookie_header)
        except http.cookies.CookieError:
            return None
        if 'booking_session' in cookies:
            return cookies['booking_session'].value
        return None

    def get_booking_session(self):
        token = self.get_booking_session_token()
        return booking_sessions.get(token) if token else None

    def get_booking_role(self):
        s = self.get_booking_session()
        return s['role'] if s else None

    def get_booking_name(self):
        s = self.get_booking_session()
        return s['name'] if s else ''

    def is_authenticated(self):
        token = self.get_session_token()
        return token and token in active_sessions

    def require_booking_auth(self):
        if self.get_booking_session():
            return True
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        if path in BOOKING_PUBLIC_PATHS:
            return True
        if path.startswith('/api/booking'):
            self.send_json({'error': 'Unauthorized'}, 401)
        else:
            self.send_response(302)
            self.send_header('Location', '/book-login.html')
            self.end_headers()
        return False

    def require_auth(self):
        if self.is_authenticated():
            return True
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        if path in PUBLIC_PATHS:
            return True
        if path.startswith('/api/'):
            self.send_json({'error': 'Unauthorized'}, 401)
        else:
            self.send_response(302)
            self.send_header('Location', '/login.html')
            self.end_headers()
        return False

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == '/api/auth/check':
            self.send_json({'authenticated': self.is_authenticated()})
            return

        if path == '/api/booking/auth/me':
            s = self.get_booking_session()
            if s:
                self.send_json({'role': s['role'], 'name': s['name']})
            else:
                self.send_json({'error': 'Not authenticated'}, 401)
            return

        if path == '/api/bookings':
            if not self.require_booking_auth():
                return
            self.handle_list_bookings()
            return

        if path in BOOKING_PROTECTED_PATHS:
            if not self.require_booking_auth():
                return
            self.serve_static(path)
            return

        if path in BOOKING_PUBLIC_PATHS:
            self.serve_static(path)
            return

        if not self.require_auth():
            return

        if path == '/api/influencers':
            self.handle_list()
        elif path.startswith('/api/influencers/'):
            id_ = path.split('/')[-1]
            self.handle_get_one(id_)
        else:
            self.serve_static(path)

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path == '/api/auth/login':
            self.handle_login()
            return

        if path == '/api/auth/logout':
            self.handle_logout()
            return

        if path == '/api/booking/auth/login':
            self.handle_booking_login()
            return

        if path == '/api/booking/auth/logout':
            self.handle_booking_logout()
            return

        if path == '/api/bookings':
            if not self.require_booking_auth():
                return
            self.handle_create_booking()
            return

        if not self.require_auth():
            return

        if path == '/api/influencers':
            self.handle_create()
        else:
            self.send_error(404)

    def do_PUT(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path.startswith('/api/bookings/'):
            if not self.require_booking_auth():
                return
            id_ = path.split('/')[-1]
            self.handle_update_booking(id_)
        else:
            self.send_error(404)

    def do_DELETE(self):
        if not self.require_auth():
            return

        if self.path.startswith('/api/influencers/'):
            id_ = self.path.split('/')[-1]
            self.handle_delete(id_)
        else:
            self.send_error(404)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_cors_headers()
        self.end_headers()

    def send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def send_json(self, data, status=200):
        body = json.dumps(data).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_cors_headers()
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def send_json_with_cookie(self, data, cookie_header, status=200):
        body = json.dumps(data).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Set-Cookie', cookie_header)
        self.send_cors_headers()
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def read_body(self):
        length = int(self.headers.get('Content-Length', 0))
        return json.loads(self.rfile.read(length)) if length else {}

    def handle_login(self):
        data = self.read_body()
        password = data.get('password', '')

        if password == PASSWORD:
            token = secrets.token_hex(32)
            active_sessions.add(token)
            cookie = f'session={token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=604800'
            self.send_json_with_cookie({'ok': True}, cookie)
        else:
            self.send_json({'error': 'Wrong password'}, 401)

    def handle_logout(self):
        token = self.get_session_token()
        if token:
            active_sessions.discard(token)
        cookie = 'session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0'
        self.send_json_with_cookie({'ok': True}, cookie)

    def handle_booking_login(self):
        data = self.read_body()
        password = data.get('password', '')
        name = data.get('name', '').strip()

        if password == PASSWORD:
            role = 'admin'
            session_name = 'Admin'
        elif password == SALES_PASSWORD:
            if not name:
                self.send_json({'error': 'Your name is required'}, 400)
                return
            role = 'sales'
            session_name = name
        else:
            self.send_json({'error': 'Wrong password'}, 401)
            return

        token = secrets.token_hex(32)
        booking_sessions[token] = {'role': role, 'name': session_name}
        cookie = f'booking_session={token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=604800'
        self.send_json_with_cookie({'ok': True, 'role': role, 'name': session_name}, cookie)

    def handle_booking_logout(self):
        token = self.get_booking_session_token()
        if token:
            booking_sessions.pop(token, None)
        cookie = 'booking_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0'
        self.send_json_with_cookie({'ok': True}, cookie)

    def handle_list_bookings(self):
        role = self.get_booking_role()
        name = self.get_booking_name()
        conn = get_db()
        if role == 'admin':
            rows = conn.execute(
                'SELECT * FROM bookings ORDER BY created_at DESC'
            ).fetchall()
        else:
            rows = conn.execute(
                'SELECT * FROM bookings WHERE sales_name = ? ORDER BY created_at DESC',
                (name,)
            ).fetchall()
        conn.close()
        self.send_json([dict(r) for r in rows])

    def handle_create_booking(self):
        if self.get_booking_role() != 'sales':
            self.send_json({'error': 'Only sales team can submit bookings'}, 403)
            return
        data = self.read_body()
        required = ['client_name', 'slot1', 'slot2', 'slot3']
        for f in required:
            if not data.get(f):
                self.send_json({'error': f'{f} is required'}, 400)
                return
        booking = {
            'sales_name': self.get_booking_name(),
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
        self.send_json(booking, 201)

    def handle_update_booking(self, id_):
        data = self.read_body()
        action = data.get('action', '')
        role = self.get_booking_role()
        now = datetime.utcnow().isoformat()

        conn = get_db()
        row = conn.execute('SELECT * FROM bookings WHERE id = ?', (id_,)).fetchone()
        if not row:
            conn.close()
            self.send_json({'error': 'Not found'}, 404)
            return
        booking = dict(row)

        if role == 'admin':
            if action == 'approve':
                slot_key = data.get('slot', 'slot1')
                if slot_key not in ('slot1', 'slot2', 'slot3'):
                    conn.close()
                    self.send_json({'error': 'Invalid slot'}, 400)
                    return
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
                    self.send_json({'error': 'counter_slot is required'}, 400)
                    return
                conn.execute(
                    'UPDATE bookings SET status=?, counter_slot=?, admin_notes=?, updated_at=? WHERE id=?',
                    ('counter_proposed', counter_slot, data.get('admin_notes', ''), now, id_)
                )
            else:
                conn.close()
                self.send_json({'error': 'Invalid action'}, 400)
                return
        elif role == 'sales':
            if booking['sales_name'] != self.get_booking_name():
                conn.close()
                self.send_json({'error': 'Forbidden'}, 403)
                return
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
                self.send_json({'error': 'Invalid action'}, 400)
                return
        else:
            conn.close()
            self.send_json({'error': 'Unauthorized'}, 401)
            return

        conn.commit()
        updated = dict(conn.execute('SELECT * FROM bookings WHERE id = ?', (id_,)).fetchone())
        conn.close()
        self.send_json(updated)

    def handle_list(self):
        conn = get_db()
        rows = conn.execute(
            'SELECT * FROM influencers ORDER BY created DESC'
        ).fetchall()
        conn.close()
        self.send_json([dict(r) for r in rows])

    def handle_get_one(self, id_):
        conn = get_db()
        row = conn.execute(
            'SELECT * FROM influencers WHERE id = ?', (id_,)
        ).fetchone()
        conn.close()
        if row:
            self.send_json(dict(row))
        else:
            self.send_json({'error': 'Not found'}, 404)

    def handle_create(self):
        data = self.read_body()
        if not data.get('name'):
            self.send_json({'error': 'Name is required'}, 400)
            return

        fields = [
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
        values = {f: data.get(f, '') for f in fields}
        values['created'] = datetime.utcnow().isoformat()

        conn = get_db()
        cursor = conn.execute(
            f'''INSERT INTO influencers ({', '.join(values.keys())})
                VALUES ({', '.join('?' for _ in values)})''',
            list(values.values())
        )
        new_id = cursor.lastrowid
        conn.commit()
        conn.close()

        values['id'] = new_id
        self.send_json(values, 201)

    def handle_delete(self, id_):
        conn = get_db()
        conn.execute('DELETE FROM influencers WHERE id = ?', (id_,))
        conn.commit()
        conn.close()
        self.send_json({'ok': True})

    def serve_static(self, path):
        if path == '/':
            path = '/index.html'

        filepath = os.path.join(STATIC_DIR, path.lstrip('/'))
        filepath = os.path.normpath(filepath)

        if not filepath.startswith(STATIC_DIR):
            self.send_error(403)
            return

        if not os.path.isfile(filepath):
            self.send_error(404)
            return

        mime, _ = mimetypes.guess_type(filepath)
        if mime is None:
            mime = 'application/octet-stream'

        with open(filepath, 'rb') as f:
            content = f.read()

        self.send_response(200)
        self.send_header('Content-Type', mime)
        self.send_header('Content-Length', str(len(content)))
        self.send_cors_headers()
        self.end_headers()
        self.wfile.write(content)

    def log_message(self, format, *args):
        print(f"[{datetime.now().strftime('%H:%M:%S')}] {args[0]}")


if __name__ == '__main__':
    init_db()
    server = http.server.HTTPServer(('0.0.0.0', PORT), CatalogueHandler)
    print(f'Influencer Catalogue running at http://localhost:{PORT}')
    print(f'Password protected — share the password with your team.')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nShutting down...')
        server.server_close()
