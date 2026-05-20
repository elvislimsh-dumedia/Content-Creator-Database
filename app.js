// =====================
// COUNTRY DIAL CODES
// =====================
const COUNTRY_CODES = [
    { code: '+65', flag: '\u{1F1F8}\u{1F1EC}', name: 'SG' },
    { code: '+60', flag: '\u{1F1F2}\u{1F1FE}', name: 'MY' },
    { code: '+62', flag: '\u{1F1EE}\u{1F1E9}', name: 'ID' },
    { code: '+63', flag: '\u{1F1F5}\u{1F1ED}', name: 'PH' },
    { code: '+66', flag: '\u{1F1F9}\u{1F1ED}', name: 'TH' },
    { code: '+84', flag: '\u{1F1FB}\u{1F1F3}', name: 'VN' },
    { code: '+673', flag: '\u{1F1E7}\u{1F1F3}', name: 'BN' },
    { code: '+855', flag: '\u{1F1F0}\u{1F1ED}', name: 'KH' },
    { code: '+856', flag: '\u{1F1F1}\u{1F1E6}', name: 'LA' },
    { code: '+95', flag: '\u{1F1F2}\u{1F1F2}', name: 'MM' },
    { code: '+86', flag: '\u{1F1E8}\u{1F1F3}', name: 'CN' },
    { code: '+852', flag: '\u{1F1ED}\u{1F1F0}', name: 'HK' },
    { code: '+853', flag: '\u{1F1F2}\u{1F1F4}', name: 'MO' },
    { code: '+886', flag: '\u{1F1F9}\u{1F1FC}', name: 'TW' },
    { code: '+81', flag: '\u{1F1EF}\u{1F1F5}', name: 'JP' },
    { code: '+82', flag: '\u{1F1F0}\u{1F1F7}', name: 'KR' },
    { code: '+91', flag: '\u{1F1EE}\u{1F1F3}', name: 'IN' },
    { code: '+92', flag: '\u{1F1F5}\u{1F1F0}', name: 'PK' },
    { code: '+94', flag: '\u{1F1F1}\u{1F1F0}', name: 'LK' },
    { code: '+880', flag: '\u{1F1E7}\u{1F1E9}', name: 'BD' },
    { code: '+977', flag: '\u{1F1F3}\u{1F1F5}', name: 'NP' },
    { code: '+971', flag: '\u{1F1E6}\u{1F1EA}', name: 'AE' },
    { code: '+966', flag: '\u{1F1F8}\u{1F1E6}', name: 'SA' },
    { code: '+974', flag: '\u{1F1F6}\u{1F1E6}', name: 'QA' },
    { code: '+973', flag: '\u{1F1E7}\u{1F1ED}', name: 'BH' },
    { code: '+968', flag: '\u{1F1F4}\u{1F1F2}', name: 'OM' },
    { code: '+965', flag: '\u{1F1F0}\u{1F1FC}', name: 'KW' },
    { code: '+962', flag: '\u{1F1EF}\u{1F1F4}', name: 'JO' },
    { code: '+961', flag: '\u{1F1F1}\u{1F1E7}', name: 'LB' },
    { code: '+972', flag: '\u{1F1EE}\u{1F1F1}', name: 'IL' },
    { code: '+90', flag: '\u{1F1F9}\u{1F1F7}', name: 'TR' },
    { code: '+1', flag: '\u{1F1FA}\u{1F1F8}', name: 'US' },
    { code: '+1', flag: '\u{1F1E8}\u{1F1E6}', name: 'CA' },
    { code: '+52', flag: '\u{1F1F2}\u{1F1FD}', name: 'MX' },
    { code: '+55', flag: '\u{1F1E7}\u{1F1F7}', name: 'BR' },
    { code: '+54', flag: '\u{1F1E6}\u{1F1F7}', name: 'AR' },
    { code: '+56', flag: '\u{1F1E8}\u{1F1F1}', name: 'CL' },
    { code: '+57', flag: '\u{1F1E8}\u{1F1F4}', name: 'CO' },
    { code: '+51', flag: '\u{1F1F5}\u{1F1EA}', name: 'PE' },
    { code: '+44', flag: '\u{1F1EC}\u{1F1E7}', name: 'UK' },
    { code: '+353', flag: '\u{1F1EE}\u{1F1EA}', name: 'IE' },
    { code: '+33', flag: '\u{1F1EB}\u{1F1F7}', name: 'FR' },
    { code: '+49', flag: '\u{1F1E9}\u{1F1EA}', name: 'DE' },
    { code: '+39', flag: '\u{1F1EE}\u{1F1F9}', name: 'IT' },
    { code: '+34', flag: '\u{1F1EA}\u{1F1F8}', name: 'ES' },
    { code: '+351', flag: '\u{1F1F5}\u{1F1F9}', name: 'PT' },
    { code: '+31', flag: '\u{1F1F3}\u{1F1F1}', name: 'NL' },
    { code: '+32', flag: '\u{1F1E7}\u{1F1EA}', name: 'BE' },
    { code: '+41', flag: '\u{1F1E8}\u{1F1ED}', name: 'CH' },
    { code: '+43', flag: '\u{1F1E6}\u{1F1F9}', name: 'AT' },
    { code: '+46', flag: '\u{1F1F8}\u{1F1EA}', name: 'SE' },
    { code: '+47', flag: '\u{1F1F3}\u{1F1F4}', name: 'NO' },
    { code: '+45', flag: '\u{1F1E9}\u{1F1F0}', name: 'DK' },
    { code: '+358', flag: '\u{1F1EB}\u{1F1EE}', name: 'FI' },
    { code: '+48', flag: '\u{1F1F5}\u{1F1F1}', name: 'PL' },
    { code: '+420', flag: '\u{1F1E8}\u{1F1FF}', name: 'CZ' },
    { code: '+30', flag: '\u{1F1EC}\u{1F1F7}', name: 'GR' },
    { code: '+36', flag: '\u{1F1ED}\u{1F1FA}', name: 'HU' },
    { code: '+40', flag: '\u{1F1F7}\u{1F1F4}', name: 'RO' },
    { code: '+380', flag: '\u{1F1FA}\u{1F1E6}', name: 'UA' },
    { code: '+7', flag: '\u{1F1F7}\u{1F1FA}', name: 'RU' },
    { code: '+61', flag: '\u{1F1E6}\u{1F1FA}', name: 'AU' },
    { code: '+64', flag: '\u{1F1F3}\u{1F1FF}', name: 'NZ' },
    { code: '+27', flag: '\u{1F1FF}\u{1F1E6}', name: 'ZA' },
    { code: '+234', flag: '\u{1F1F3}\u{1F1EC}', name: 'NG' },
    { code: '+254', flag: '\u{1F1F0}\u{1F1EA}', name: 'KE' },
    { code: '+233', flag: '\u{1F1EC}\u{1F1ED}', name: 'GH' },
    { code: '+20', flag: '\u{1F1EA}\u{1F1EC}', name: 'EG' },
    { code: '+212', flag: '\u{1F1F2}\u{1F1E6}', name: 'MA' },
];

function populateDialCodeSelect(selectEl, selectedCode = '+65') {
    selectEl.innerHTML = COUNTRY_CODES.map(c =>
        `<option value="${c.code}" ${c.code === selectedCode ? 'selected' : ''}>${c.flag} ${c.code} ${c.name}</option>`
    ).join('');
}

// Parse a stored phone number into { dialCode, number }
function parsePhoneNumber(phone) {
    if (!phone) return { dialCode: '+65', number: '' };
    phone = phone.trim();
    // Try to match a leading dial code
    for (const c of COUNTRY_CODES) {
        if (phone.startsWith(c.code + ' ') || phone.startsWith(c.code)) {
            const num = phone.slice(c.code.length).trim();
            return { dialCode: c.code, number: num };
        }
    }
    // If it starts with + but doesn't match, keep as-is
    if (phone.startsWith('+')) {
        const match = phone.match(/^(\+\d{1,4})\s*(.*)/);
        if (match) return { dialCode: match[1], number: match[2] };
    }
    // No dial code — assume Singapore
    return { dialCode: '+65', number: phone };
}

// Format phone: combine dial code + number
function formatPhoneNumber(dialCode, number) {
    const cleaned = number.replace(/[^\d]/g, '');
    if (!cleaned) return '';
    return dialCode + ' ' + cleaned;
}

// =====================
// SESSION AUTH
// =====================

// Check session on page load
(async () => {
    const token = localStorage.getItem('duc_session');
    if (!token) {
        window.location.href = '/login.html';
        return;
    }
    const { data } = await supabaseClient.rpc('check_session', { token });
    if (!data || !data.length || !data[0].is_valid) {
        localStorage.removeItem('duc_session');
        localStorage.removeItem('duc_user');
        window.location.href = '/login.html';
    }
})();

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('duc_session');
    localStorage.removeItem('duc_user');
    window.location.href = '/login.html';
});

// =====================
// ACCESS REQUEST MANAGEMENT (Admin Panel)
// =====================

async function loadPendingRequests() {
    const { data } = await supabaseClient
        .from('access_sessions')
        .select('*')
        .eq('status', 'pending')
        .order('created_at', { ascending: false });

    const pending = data || [];
    const badge = document.getElementById('bellBadge');
    const list = document.getElementById('accessList');

    if (pending.length > 0) {
        badge.textContent = pending.length;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }

    if (pending.length === 0) {
        list.innerHTML = '<p class="access-empty">No pending requests</p>';
        return;
    }

    list.innerHTML = pending.map(req => {
        const time = new Date(req.created_at);
        const timeStr = time.toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
        const device = (req.device_info || '').substring(0, 50);
        return `
            <div class="access-item" id="req-${req.id}">
                <div class="access-info">
                    <div class="access-name">${esc(req.requester_name)}</div>
                    <div class="access-time">${timeStr}</div>
                    <div class="access-device">${esc(device)}</div>
                </div>
                <div class="access-btns">
                    <button class="access-approve" onclick="approveRequest(${req.id})">Approve</button>
                    <button class="access-reject" onclick="rejectRequest(${req.id})">Reject</button>
                </div>
            </div>`;
    }).join('');
}

async function approveRequest(id) {
    await supabaseClient.from('access_sessions').update({
        status: 'approved',
        approved_at: new Date().toISOString()
    }).eq('id', id);
    const el = document.getElementById('req-' + id);
    if (el) el.remove();
    loadPendingRequests();
}

async function rejectRequest(id) {
    await supabaseClient.from('access_sessions').update({
        status: 'rejected'
    }).eq('id', id);
    const el = document.getElementById('req-' + id);
    if (el) el.remove();
    loadPendingRequests();
}

// Bell toggle
document.getElementById('accessBell').addEventListener('click', () => {
    const panel = document.getElementById('accessPanel');
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) {
        loadPendingRequests();
    }
});

document.getElementById('accessPanelClose').addEventListener('click', () => {
    document.getElementById('accessPanel').classList.add('hidden');
});

// Close panel when clicking outside
document.addEventListener('click', e => {
    const panel = document.getElementById('accessPanel');
    const bell = document.getElementById('accessBell');
    if (!panel.contains(e.target) && !bell.contains(e.target)) {
        panel.classList.add('hidden');
    }
});

// Listen for new access requests via Realtime
supabaseClient
    .channel('access-requests')
    .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'access_sessions'
    }, () => {
        loadPendingRequests();
    })
    .subscribe();

// Initial load of pending requests
loadPendingRequests();
// Refresh every 30s as fallback
setInterval(loadPendingRequests, 30000);

// =====================
// SUPABASE STORAGE HELPERS
// =====================
const STORAGE_BUCKET = 'creator-files';

async function uploadToStorage(file, path) {
    const { data, error } = await supabaseClient.storage
        .from(STORAGE_BUCKET)
        .upload(path, file, { cacheControl: '3600', upsert: true });
    if (error) throw error;
    const { data: urlData } = supabaseClient.storage
        .from(STORAGE_BUCKET)
        .getPublicUrl(path);
    return urlData.publicUrl;
}

async function deleteFromStorage(path) {
    try {
        await supabaseClient.storage.from(STORAGE_BUCKET).remove([path]);
    } catch(e) { /* ignore delete errors */ }
}

// Convert base64 data URL to File object
function base64ToFile(dataUrl, filename) {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new File([u8arr], filename, { type: mime });
}

// Compress image before upload (returns File)
function compressImage(file, maxWidth = 1200, quality = 0.8) {
    return new Promise((resolve) => {
        // If it's a PDF, skip compression
        if (file.type === 'application/pdf') { resolve(file); return; }
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = () => {
            URL.revokeObjectURL(url);
            let w = img.naturalWidth, h = img.naturalHeight;
            if (w > maxWidth) { h = Math.round(h * maxWidth / w); w = maxWidth; }
            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            canvas.toBlob(blob => {
                resolve(new File([blob], file.name, { type: 'image/jpeg' }));
            }, 'image/jpeg', quality);
        };
        img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
        img.src = url;
    });
}

// Generate unique storage path
function storagePath(creatorId, type, filename) {
    const ts = Date.now();
    const safe = (filename || 'file').replace(/[^a-zA-Z0-9._-]/g, '_');
    return `${creatorId}/${type}/${ts}_${safe}`;
}

// Check if a URL is a storage URL (not base64)
function isStorageUrl(str) {
    return str && (str.startsWith('http://') || str.startsWith('https://'));
}

// Supabase API helpers
const LIGHT_COLUMNS = 'id,name,gender,phone,handle_ig,handle_tiktok,handle_fb,handle_yt,handle_xhs,url_ig,url_tiktok,url_fb,url_yt,url_xhs,ig_followers,tiktok_followers,fb_followers,xhs_followers,yt_followers,ig_followers_raw,tiktok_followers_raw,fb_followers_raw,yt_followers_raw,xhs_followers_raw,rate_ig_story_min,rate_ig_story_max,rate_ig_story_notes,rate_ig_post_min,rate_ig_post_max,rate_ig_post_notes,rate_ig_carousel_min,rate_ig_carousel_max,rate_ig_carousel_notes,rate_ig_reel_min,rate_ig_reel_max,rate_ig_reel_notes,rate_tiktok_video_min,rate_tiktok_video_max,rate_tiktok_video_notes,rate_tiktok_carousel_min,rate_tiktok_carousel_max,rate_tiktok_carousel_notes,rate_tiktok_story_min,rate_tiktok_story_max,rate_tiktok_story_notes,rate_fb_video_min,rate_fb_video_max,rate_fb_video_notes,rate_fb_photo_min,rate_fb_photo_max,rate_fb_photo_notes,rate_yt_video_min,rate_yt_video_max,rate_yt_video_notes,rate_xhs_video_min,rate_xhs_video_max,rate_xhs_video_notes,rate_xhs_photo_min,rate_xhs_photo_max,rate_xhs_photo_notes,content_style,contact,email,location,notes,image,profile_photo,attachments,created';

async function dbGetAll() {
    const { data, error } = await supabaseClient
        .from('influencers')
        .select(LIGHT_COLUMNS)
        .order('created', { ascending: false });
    if (error) throw error;
    return data || [];
}

async function dbInsert(entry) {
    const { data, error } = await supabaseClient
        .from('influencers')
        .insert([entry])
        .select()
        .single();
    if (error) throw error;
    return data;
}

async function dbDelete(id) {
    const { error } = await supabaseClient
        .from('influencers')
        .delete()
        .eq('id', id);
    if (error) throw error;
}

async function dbGetOne(id) {
    const { data, error } = await supabaseClient
        .from('influencers')
        .select('*')
        .eq('id', id)
        .single();
    if (error) throw error;
    return data;
}

async function dbUpdate(id, updates) {
    const { data, error } = await supabaseClient
        .from('influencers')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
    if (error) throw error;
    return data;
}

// Tab switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
        localStorage.setItem('duc_active_tab', tab.dataset.tab);
        if (tab.dataset.tab === 'catalogue') renderCatalogue();
    });
});

// Restore last active tab on page load
(() => {
    const savedTab = localStorage.getItem('duc_active_tab');
    if (savedTab) {
        const tabBtn = document.querySelector(`.tab[data-tab="${savedTab}"]`);
        if (tabBtn) tabBtn.click();
    }
})();

// Initialize dial code dropdown
populateDialCodeSelect(document.getElementById('f_dial_code'), '+65');

// File upload
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');

dropZone.addEventListener('click', () => fileInput.click());
dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('dragover'); });
dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files.length) handleMultipleFiles(Array.from(e.dataTransfer.files));
});
fileInput.addEventListener('change', e => {
    if (e.target.files.length) handleMultipleFiles(Array.from(e.target.files));
});

let uploadQueue = [];
let currentQueueIndex = 0;

function handleMultipleFiles(files) {
    const validFiles = files.filter(f => f.type.match(/image\/(jpeg|png)/) || f.type === 'application/pdf');
    if (validFiles.length === 0) {
        alert('Please upload JPG, PNG, or PDF files.');
        return;
    }
    if (validFiles.length === 1) {
        handleFile(validFiles[0]);
        return;
    }
    // Multi-file mode
    uploadQueue = validFiles;
    currentQueueIndex = 0;
    showFileQueue();
    processNextInQueue();
}

function showFileQueue() {
    const queueEl = document.getElementById('fileQueue');
    const listEl = document.getElementById('fileQueueList');
    const countEl = document.getElementById('fileQueueCount');
    queueEl.classList.remove('hidden');
    countEl.textContent = `${uploadQueue.length} files`;
    listEl.innerHTML = uploadQueue.map((f, i) => `
        <div class="file-queue-item" id="fq-${i}">
            <span class="fq-name">${esc(f.name)}</span>
            <span class="fq-status" id="fq-status-${i}">Waiting...</span>
        </div>
    `).join('');
}

function updateQueueStatus(index, status, className) {
    const el = document.getElementById('fq-status-' + index);
    if (el) {
        el.textContent = status;
        el.className = 'fq-status ' + (className || '');
    }
}

async function processNextInQueue() {
    if (currentQueueIndex >= uploadQueue.length) {
        document.getElementById('fileQueueTitle').textContent = 'All files processed!';
        return;
    }
    const file = uploadQueue[currentQueueIndex];
    const idx = currentQueueIndex;
    document.getElementById('fileQueueTitle').textContent = `Processing file ${idx + 1} of ${uploadQueue.length}...`;
    updateQueueStatus(idx, 'Processing...', 'fq-active');

    // Process this file via OCR and auto-save
    try {
        const result = await processFileForQueue(file);
        updateQueueStatus(idx, 'Saved ✓', 'fq-done');
    } catch (err) {
        updateQueueStatus(idx, 'Failed: ' + err.message, 'fq-error');
    }
    currentQueueIndex++;
    processNextInQueue();
}

async function processFileForQueue(file) {
    const isImage = file.type.match(/image\/(jpeg|png)/);
    const isPDF = file.type === 'application/pdf';

    let text = '';
    let imageData = null;

    if (isPDF) {
        await window.pdfjsReady;
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const pageImages = [];
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 2 });
            const canvas = document.createElement('canvas');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
            pageImages.push(canvas.toDataURL('image/png'));
        }
        imageData = pageImages[0];
        for (const img of pageImages) {
            const result = await Tesseract.recognize(img, 'eng');
            text += result.data.text + '\n';
        }
    } else {
        imageData = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.readAsDataURL(file);
        });
        const result = await Tesseract.recognize(imageData, 'eng');
        text = result.data.text;
    }

    const parsed = parseRateCard(text);
    const entry = buildEntryFromParsed(parsed, null);
    const saved = await dbInsert(entry);
    // Upload rate card to storage
    if (imageData) {
        const imgFile = base64ToFile(imageData, 'rate_card.jpg');
        const compressed = await compressImage(imgFile);
        const url = await uploadToStorage(compressed, storagePath(saved.id, 'ratecard', 'rate_card.jpg'));
        await dbUpdate(saved.id, { image: url });
    }
    return entry;
}

function buildEntryFromParsed(data, imageData) {
    const fields = [
        'name', 'gender', 'content_style', 'email', 'phone', 'location', 'notes',
        'handle_ig', 'handle_tiktok', 'handle_fb', 'handle_yt', 'handle_xhs',
        'url_ig', 'url_tiktok', 'url_fb', 'url_yt', 'url_xhs',
    ];
    const rateMapping = {
        'rate_ig_story': 'rate_ig_story_min',
        'rate_ig_reel': 'rate_ig_reel_min',
        'rate_ig_post': 'rate_ig_post_min',
        'rate_ig_carousel': 'rate_ig_carousel_min',
        'rate_tiktok': 'rate_tiktok_video_min',
    };
    const entry = {};
    for (const f of fields) entry[f] = data[f] || '';
    // Follower fields
    for (const f of ['ig_followers', 'tiktok_followers', 'fb_followers', 'yt_followers', 'xhs_followers']) {
        entry[f] = data[f] || '';
        entry[f + '_raw'] = data[f] ? String(parseSmartNumber(data[f])) : '';
    }
    // Rate fields
    const rateFields = [
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
    ];
    for (const f of rateFields) entry[f] = data[f] || '';
    for (const [oldKey, newKey] of Object.entries(rateMapping)) {
        if (data[oldKey] && !entry[newKey]) entry[newKey] = data[oldKey];
    }
    entry.image = imageData || '';
    entry.profile_photo = '';
    entry.attachments = '';
    return entry;
}

let currentImageData = null;
let currentProfilePhoto = null;

// =====================
// MODE TOGGLE (Upload vs Manual)
// =====================
document.getElementById('modeUpload').addEventListener('click', () => {
    document.getElementById('modeUpload').classList.add('active');
    document.getElementById('modeManual').classList.remove('active');
    document.getElementById('uploadArea').classList.remove('hidden');
    document.getElementById('formSection').classList.add('hidden');
    document.getElementById('formTitle').textContent = 'Review & Edit Extracted Data';
});

document.getElementById('modeManual').addEventListener('click', () => {
    document.getElementById('modeManual').classList.add('active');
    document.getElementById('modeUpload').classList.remove('active');
    document.getElementById('uploadArea').classList.add('hidden');
    document.getElementById('formSection').classList.remove('hidden');
    document.getElementById('formTitle').textContent = 'Add Creator Manually';
    document.getElementById('processingSection').classList.add('hidden');
    document.getElementById('extractedText').classList.add('hidden');
});

// =====================
// PROFILE PHOTO + CROP
// =====================
let cropState = { img: null, x: 0, y: 0, zoom: 1, dragging: false, startX: 0, startY: 0 };

document.getElementById('profilePhotoBtn').addEventListener('click', () => {
    document.getElementById('profilePhotoInput').click();
});
document.getElementById('profilePhotoPreview').addEventListener('click', () => {
    document.getElementById('profilePhotoInput').click();
});

document.getElementById('profilePhotoInput').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
        openCropModal(ev.target.result);
    };
    reader.readAsDataURL(file);
});

function openCropModal(imageSrc) {
    const modal = document.getElementById('cropModal');
    const img = document.getElementById('cropImage');
    const zoomSlider = document.getElementById('cropZoom');

    img.onload = () => {
        const vp = 300;
        const scale = vp / Math.min(img.naturalWidth, img.naturalHeight);
        cropState = {
            img, x: 0, y: 0,
            zoom: scale,
            baseScale: scale,
            dragging: false, startX: 0, startY: 0,
            naturalW: img.naturalWidth,
            naturalH: img.naturalHeight
        };
        zoomSlider.min = scale;
        zoomSlider.max = scale * 3;
        zoomSlider.step = scale * 0.02;
        zoomSlider.value = scale;
        updateCropTransform();
        modal.classList.remove('hidden');
    };
    img.src = imageSrc;
}

function updateCropTransform() {
    const { img, x, y, zoom } = cropState;
    img.style.transform = `translate(${x}px, ${y}px) scale(${zoom})`;
    img.style.transformOrigin = '0 0';
}

const cropViewport = document.getElementById('cropViewport');

cropViewport.addEventListener('mousedown', e => {
    e.preventDefault();
    cropState.dragging = true;
    cropState.startX = e.clientX - cropState.x;
    cropState.startY = e.clientY - cropState.y;
});

window.addEventListener('mousemove', e => {
    if (!cropState.dragging) return;
    cropState.x = e.clientX - cropState.startX;
    cropState.y = e.clientY - cropState.startY;
    updateCropTransform();
});

window.addEventListener('mouseup', () => { cropState.dragging = false; });

cropViewport.addEventListener('wheel', e => {
    e.preventDefault();
    const slider = document.getElementById('cropZoom');
    const delta = e.deltaY > 0 ? -parseFloat(slider.step) * 3 : parseFloat(slider.step) * 3;
    cropState.zoom = Math.max(parseFloat(slider.min), Math.min(parseFloat(slider.max), cropState.zoom + delta));
    slider.value = cropState.zoom;
    updateCropTransform();
}, { passive: false });

// Touch support for crop
cropViewport.addEventListener('touchstart', e => {
    if (e.touches.length === 1) {
        e.preventDefault();
        cropState.dragging = true;
        cropState.startX = e.touches[0].clientX - cropState.x;
        cropState.startY = e.touches[0].clientY - cropState.y;
    }
}, { passive: false });

window.addEventListener('touchmove', e => {
    if (!cropState.dragging || e.touches.length !== 1) return;
    cropState.x = e.touches[0].clientX - cropState.startX;
    cropState.y = e.touches[0].clientY - cropState.startY;
    updateCropTransform();
}, { passive: false });

window.addEventListener('touchend', () => { cropState.dragging = false; });

document.getElementById('cropZoom').addEventListener('input', e => {
    cropState.zoom = parseFloat(e.target.value);
    updateCropTransform();
});

document.getElementById('cropSave').addEventListener('click', () => {
    const canvas = document.createElement('canvas');
    const size = 400;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    const { img, x, y, zoom } = cropState;
    const ratio = size / 300;
    ctx.drawImage(img, x * ratio, y * ratio, img.naturalWidth * zoom * ratio, img.naturalHeight * zoom * ratio);

    currentProfilePhoto = canvas.toDataURL('image/jpeg', 0.85);
    const preview = document.getElementById('profilePhotoPreview');
    preview.innerHTML = `<img src="${currentProfilePhoto}" alt="Profile">`;
    document.getElementById('cropModal').classList.add('hidden');
});

document.getElementById('cropCancel').addEventListener('click', () => {
    document.getElementById('cropModal').classList.add('hidden');
});

document.getElementById('cropModal').addEventListener('click', e => {
    if (e.target === e.currentTarget) document.getElementById('cropModal').classList.add('hidden');
});

// =====================
// SMART FOLLOWER INPUTS
// =====================
function parseSmartNumber(str) {
    if (!str) return 0;
    str = str.trim().replace(/,/g, '');
    const match = str.match(/^(\d+\.?\d*)\s*([KkMm]?)$/);
    if (!match) return parseInt(str.replace(/\D/g, ''), 10) || 0;
    let num = parseFloat(match[1]);
    const suffix = match[2].toUpperCase();
    if (suffix === 'K') num *= 1000;
    else if (suffix === 'M') num *= 1000000;
    return Math.round(num);
}

function formatSmartNumber(raw) {
    if (!raw || raw === 0) return '';
    if (raw >= 1000000) return (raw / 1000000).toFixed(raw % 1000000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'M';
    if (raw >= 1000) return (raw / 1000).toFixed(raw % 1000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'K';
    return String(raw);
}

document.querySelectorAll('.smart-follower').forEach(input => {
    input.addEventListener('blur', () => {
        const raw = parseSmartNumber(input.value);
        const hiddenId = input.dataset.raw;
        document.getElementById(hiddenId).value = raw || '';
        if (raw > 0) input.value = formatSmartNumber(raw);
    });
});

// =====================
// RATE ACCORDION
// =====================
document.querySelectorAll('.rate-cat-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.getElementById(btn.dataset.target);
        target.classList.toggle('open');
        btn.classList.toggle('open');
    });
});

// =====================
// FOLLOWER FILTER DROPDOWNS
// =====================
const FOLLOWER_OPTIONS = [
    1000, 3000, 5000, 10000, 15000, 20000, 25000, 35000,
    50000, 75000, 100000, 125000, 150000
];

function formatFollowerOption(n) {
    return n.toLocaleString();
}

function buildFollowerDropdown(dropdownEl, inputEl) {
    dropdownEl.innerHTML = '';
    FOLLOWER_OPTIONS.forEach(val => {
        const div = document.createElement('div');
        div.className = 'follower-dropdown-item';
        div.textContent = formatFollowerOption(val);
        div.addEventListener('mousedown', e => {
            e.preventDefault();
            inputEl.value = formatFollowerOption(val);
            dropdownEl.classList.remove('open');
            debounceRender();
        });
        dropdownEl.appendChild(div);
    });
}

(function initFollowerDropdowns() {
    const minInput = document.getElementById('filterFollowersMin');
    const maxInput = document.getElementById('filterFollowersMax');
    const minDrop = document.getElementById('followerFromDropdown');
    const maxDrop = document.getElementById('followerToDropdown');

    buildFollowerDropdown(minDrop, minInput);
    buildFollowerDropdown(maxDrop, maxInput);

    minInput.addEventListener('focus', () => minDrop.classList.add('open'));
    minInput.addEventListener('blur', () => minDrop.classList.remove('open'));
    maxInput.addEventListener('focus', () => maxDrop.classList.add('open'));
    maxInput.addEventListener('blur', () => maxDrop.classList.remove('open'));
})();

function handleFile(file) {
    const isImage = file.type.match(/image\/(jpeg|png)/);
    const isPDF = file.type === 'application/pdf';

    if (!isImage && !isPDF) {
        alert('Please upload a JPG, PNG, or PDF file.');
        return;
    }

    document.getElementById('processingSection').classList.remove('hidden');
    document.getElementById('formSection').classList.add('hidden');
    document.getElementById('extractedText').classList.add('hidden');

    if (isPDF) {
        handlePDF(file);
    } else {
        const reader = new FileReader();
        reader.onload = e => {
            currentImageData = e.target.result;
            document.getElementById('previewImage').src = currentImageData;
            runOCR(currentImageData);
        };
        reader.readAsDataURL(file);
    }
}

async function handlePDF(file) {
    const statusEl = document.getElementById('ocrStatus');
    const progressEl = document.getElementById('progressFill');
    const spinnerEl = document.getElementById('spinner');

    statusEl.textContent = 'Loading PDF...';
    progressEl.style.width = '5%';
    spinnerEl.style.display = 'block';

    try {
        await window.pdfjsReady;
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const totalPages = pdf.numPages;

        statusEl.textContent = `PDF loaded — ${totalPages} page(s). Rendering...`;
        progressEl.style.width = '15%';

        const pageImages = [];
        for (let i = 1; i <= totalPages; i++) {
            const page = await pdf.getPage(i);
            const scale = 2;
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement('canvas');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            const ctx = canvas.getContext('2d');
            await page.render({ canvasContext: ctx, viewport }).promise;
            pageImages.push(canvas.toDataURL('image/png'));

            const renderPct = 15 + Math.round((i / totalPages) * 25);
            progressEl.style.width = renderPct + '%';
            statusEl.textContent = `Rendered page ${i} of ${totalPages}...`;
        }

        currentImageData = pageImages[0];
        document.getElementById('previewImage').src = currentImageData;

        statusEl.textContent = 'Running OCR on PDF pages...';
        let allText = '';
        for (let i = 0; i < pageImages.length; i++) {
            statusEl.textContent = `OCR: page ${i + 1} of ${pageImages.length}...`;
            const result = await Tesseract.recognize(pageImages[i], 'eng', {
                logger: m => {
                    if (m.status === 'recognizing text') {
                        const base = 40 + (i / pageImages.length) * 55;
                        const pagePct = (m.progress / pageImages.length) * 55;
                        progressEl.style.width = Math.round(base + pagePct) + '%';
                    }
                }
            });
            allText += result.data.text + '\n';
        }

        spinnerEl.style.display = 'none';
        statusEl.textContent = `OCR complete! Extracted text from ${totalPages} page(s).`;
        progressEl.style.width = '100%';

        document.getElementById('rawText').textContent = allText;
        document.getElementById('extractedText').classList.remove('hidden');

        const parsed = parseRateCard(allText);
        populateForm(parsed);
        document.getElementById('formSection').classList.remove('hidden');
    } catch (err) {
        spinnerEl.style.display = 'none';
        statusEl.textContent = 'PDF processing failed: ' + err.message;
        progressEl.style.width = '0%';
    }
}

async function runOCR(imageData) {
    const statusEl = document.getElementById('ocrStatus');
    const progressEl = document.getElementById('progressFill');
    const spinnerEl = document.getElementById('spinner');

    statusEl.textContent = 'Initializing OCR engine...';
    progressEl.style.width = '0%';
    spinnerEl.style.display = 'block';

    try {
        const result = await Tesseract.recognize(imageData, 'eng', {
            logger: m => {
                if (m.status === 'recognizing text') {
                    const pct = Math.round(m.progress * 100);
                    progressEl.style.width = pct + '%';
                    statusEl.textContent = `Recognizing text... ${pct}%`;
                } else if (m.status === 'loading language traineddata') {
                    statusEl.textContent = 'Loading language data...';
                    progressEl.style.width = '20%';
                }
            }
        });

        const text = result.data.text;
        spinnerEl.style.display = 'none';
        statusEl.textContent = 'OCR complete! Text extracted successfully.';
        progressEl.style.width = '100%';

        document.getElementById('rawText').textContent = text;
        document.getElementById('extractedText').classList.remove('hidden');

        const parsed = parseRateCard(text);
        populateForm(parsed);
        document.getElementById('formSection').classList.remove('hidden');
    } catch (err) {
        spinnerEl.style.display = 'none';
        statusEl.textContent = 'OCR failed: ' + err.message;
        progressEl.style.width = '0%';
    }
}

function parseRateCard(text) {
    const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
    const fullText = lines.join(' ');
    const data = {};

    const nameCandidate = lines.find(l => /^[A-Z][A-Z\s]{2,}$/.test(l.trim()));
    if (nameCandidate) {
        data.name = toTitleCase(nameCandidate.trim());
    } else if (lines.length > 0) {
        for (const line of lines.slice(0, 5)) {
            if (/^[A-Za-z\s]+$/.test(line) && line.length > 2 && line.length < 40) {
                data.name = toTitleCase(line);
                break;
            }
        }
    }

    for (let i = 0; i < Math.min(lines.length - 1, 5); i++) {
        if (/^[A-Z]{2,}$/.test(lines[i]) && /^[A-Z]{2,}$/.test(lines[i+1])) {
            data.name = toTitleCase(lines[i] + ' ' + lines[i+1]);
            break;
        }
    }

    const emailMatch = fullText.match(/[\w.-]+@[\w.-]+\.\w{2,}/);
    if (emailMatch) data.email = emailMatch[0];

    const locations = ['Singapore', 'Malaysia', 'Indonesia', 'Thailand', 'Philippines', 'Vietnam',
        'Hong Kong', 'Taiwan', 'Japan', 'Korea', 'Australia', 'United States', 'United Kingdom'];
    for (const loc of locations) {
        if (fullText.toLowerCase().includes(loc.toLowerCase())) {
            data.location = loc;
            break;
        }
    }

    const followerPatterns = [
        { key: 'ig_followers', patterns: [/(\d+[.,]?\d*\s*[KkMm]?)\s*(?:FOLLOWERS|followers)/i, /instagram[^]*?(\d+[.,]?\d*\s*[KkMm])\s/i] },
        { key: 'tiktok_followers', patterns: [/tiktok[^]*?(\d+[.,]?\d*\s*[KkMm])/i] },
        { key: 'yt_followers', patterns: [/youtube[^]*?(\d+[.,]?\d*\s*[KkMm])/i, /subscribers?\s*(\d+[.,]?\d*\s*[KkMm])/i] },
    ];

    const followerMatch = fullText.match(/(\d+[.,]?\d*\s*[KkMm]?)\s*FOLLOWERS/i);
    if (followerMatch) data.ig_followers = followerMatch[1].trim();

    for (const fp of followerPatterns) {
        for (const pattern of fp.patterns) {
            const match = fullText.match(pattern);
            if (match) { data[fp.key] = match[1].trim(); break; }
        }
    }

    const ratePatterns = [
        { key: 'rate_ig_story', patterns: [/(?:IG|Instagram)\s*Story[^$]*?\$\s*(\d[\d,]*)/i, /Story[^$]*?(?:Fr\.?\s*)?\$\s*(\d[\d,]*)/i] },
        { key: 'rate_ig_reel', patterns: [/(?:IG|Instagram)\s*Reel[^$]*?\$\s*(\d[\d,]*)/i, /Reel[^$]*?(?:Fr\.?\s*)?\$\s*(\d[\d,]*)/i] },
        { key: 'rate_tiktok', patterns: [/TikTok[^$]*?\$\s*(\d[\d,]*)/i, /TikTok\s*(?:Video)?[^$]*?(?:Fr\.?\s*)?\$\s*(\d[\d,]*)/i] },
        { key: 'rate_ig_post', patterns: [/(?:IG|Instagram)\s*(?:Static\s*)?Post[^$]*?\$\s*(\d[\d,]*)/i, /Post\s*\(?(?:2x|photos?)[^$]*?(?:Fr\.?\s*)?\$\s*(\d[\d,]*)/i] },
        { key: 'rate_ig_carousel', patterns: [/Carousel[^$]*?\$\s*(\d[\d,]*)/i] },
    ];

    const rateLines = lines.filter(l => /\$\s*\d/.test(l) || /Fr\.?\s*\$/.test(l));

    for (const rp of ratePatterns) {
        for (const pattern of rp.patterns) {
            const match = fullText.match(pattern);
            if (match) {
                const val = match[1] || match[2];
                if (val) { data[rp.key] = val.replace(/[,$]/g, ''); break; }
            }
        }
    }

    for (const line of rateLines) {
        const amount = line.match(/\$\s*(\d[\d,]*)/);
        if (!amount) continue;
        const val = amount[1].replace(/,/g, '');
        const lower = line.toLowerCase();

        if (lower.includes('story') && !data.rate_ig_story) data.rate_ig_story = val;
        else if (lower.includes('reel') && !data.rate_ig_reel) data.rate_ig_reel = val;
        else if (lower.includes('tiktok') && !data.rate_tiktok) data.rate_tiktok = val;
        else if (lower.includes('post') && !data.rate_ig_post) data.rate_ig_post = val;
        else if (lower.includes('carousel') && !data.rate_ig_carousel) data.rate_ig_carousel = val;
    }

    const styleKeywords = ['photography', 'fashion', 'beauty', 'lifestyle', 'travel', 'food',
        'parenting', 'fitness', 'tech', 'gaming', 'music', 'art', 'design', 'education',
        'health', 'wellness', 'sports', 'entertainment', 'comedy', 'dance', 'family',
        'kids', 'baby', 'home', 'decor', 'cooking', 'pets', 'animals', 'outdoor'];
    const foundStyles = styleKeywords.filter(s => fullText.toLowerCase().includes(s));
    if (foundStyles.length) data.content_style = foundStyles.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ');

    const igHandle = fullText.match(/instagram\.com\/(\w+)/i);
    if (igHandle) {
        data.handle_ig = '@' + igHandle[1];
        data.url_ig = 'https://instagram.com/' + igHandle[1];
    }

    const tiktokHandle = fullText.match(/tiktok\.com\/@?(\w+)/i);
    if (tiktokHandle) {
        data.handle_tiktok = '@' + tiktokHandle[1];
        data.url_tiktok = 'https://tiktok.com/@' + tiktokHandle[1];
    }

    return data;
}

function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}

function populateForm(data) {
    const textFields = [
        'name', 'gender', 'content_style', 'email', 'phone', 'location', 'notes',
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
    ];

    for (const field of textFields) {
        const el = document.getElementById('f_' + field);
        if (field === 'phone' && data[field]) {
            // Parse phone into dial code + number
            const parsed = parsePhoneNumber(data[field]);
            populateDialCodeSelect(document.getElementById('f_dial_code'), parsed.dialCode);
            el.value = parsed.number;
        } else if (el && data[field]) {
            el.value = data[field];
        } else if (el) {
            el.value = '';
        }
    }

    const followerFields = ['ig_followers', 'tiktok_followers', 'fb_followers', 'yt_followers', 'xhs_followers'];
    for (const field of followerFields) {
        const el = document.getElementById('f_' + field);
        const rawEl = document.getElementById('f_' + field + '_raw');
        if (el && data[field]) {
            el.value = data[field];
            const raw = parseSmartNumber(data[field]);
            if (rawEl) rawEl.value = raw || '';
            if (raw > 0) el.value = formatSmartNumber(raw);
        } else if (el) {
            el.value = '';
            if (rawEl) rawEl.value = '';
        }
    }

    const rateMapping = {
        'rate_ig_story': 'rate_ig_story_min',
        'rate_ig_reel': 'rate_ig_reel_min',
        'rate_ig_post': 'rate_ig_post_min',
        'rate_ig_carousel': 'rate_ig_carousel_min',
        'rate_tiktok': 'rate_tiktok_video_min',
    };
    for (const [oldKey, newKey] of Object.entries(rateMapping)) {
        if (data[oldKey] && !data[newKey]) {
            const el = document.getElementById('f_' + newKey);
            if (el) el.value = data[oldKey];
        }
    }
}

// Collect value from form element by ID
function fval(id) {
    const el = document.getElementById(id);
    return el ? el.value : '';
}

// Form submission
document.getElementById('influencerForm').addEventListener('submit', async e => {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Saving...';

    const entry = {
        name: fval('f_name'),
        gender: fval('f_gender'),
        ig_followers: fval('f_ig_followers'),
        tiktok_followers: fval('f_tiktok_followers'),
        fb_followers: fval('f_fb_followers'),
        xhs_followers: fval('f_xhs_followers'),
        yt_followers: fval('f_yt_followers'),
        ig_followers_raw: fval('f_ig_followers_raw'),
        tiktok_followers_raw: fval('f_tiktok_followers_raw'),
        fb_followers_raw: fval('f_fb_followers_raw'),
        yt_followers_raw: fval('f_yt_followers_raw'),
        xhs_followers_raw: fval('f_xhs_followers_raw'),
        handle_ig: fval('f_handle_ig'),
        handle_tiktok: fval('f_handle_tiktok'),
        handle_fb: fval('f_handle_fb'),
        handle_yt: fval('f_handle_yt'),
        handle_xhs: fval('f_handle_xhs'),
        url_ig: fval('f_url_ig'),
        url_tiktok: fval('f_url_tiktok'),
        url_fb: fval('f_url_fb'),
        url_yt: fval('f_url_yt'),
        url_xhs: fval('f_url_xhs'),
        rate_ig_story_min: fval('f_rate_ig_story_min'),
        rate_ig_story_max: fval('f_rate_ig_story_max'),
        rate_ig_story_notes: fval('f_rate_ig_story_notes'),
        rate_ig_post_min: fval('f_rate_ig_post_min'),
        rate_ig_post_max: fval('f_rate_ig_post_max'),
        rate_ig_post_notes: fval('f_rate_ig_post_notes'),
        rate_ig_carousel_min: fval('f_rate_ig_carousel_min'),
        rate_ig_carousel_max: fval('f_rate_ig_carousel_max'),
        rate_ig_carousel_notes: fval('f_rate_ig_carousel_notes'),
        rate_ig_reel_min: fval('f_rate_ig_reel_min'),
        rate_ig_reel_max: fval('f_rate_ig_reel_max'),
        rate_ig_reel_notes: fval('f_rate_ig_reel_notes'),
        rate_tiktok_video_min: fval('f_rate_tiktok_video_min'),
        rate_tiktok_video_max: fval('f_rate_tiktok_video_max'),
        rate_tiktok_video_notes: fval('f_rate_tiktok_video_notes'),
        rate_tiktok_carousel_min: fval('f_rate_tiktok_carousel_min'),
        rate_tiktok_carousel_max: fval('f_rate_tiktok_carousel_max'),
        rate_tiktok_carousel_notes: fval('f_rate_tiktok_carousel_notes'),
        rate_tiktok_story_min: fval('f_rate_tiktok_story_min'),
        rate_tiktok_story_max: fval('f_rate_tiktok_story_max'),
        rate_tiktok_story_notes: fval('f_rate_tiktok_story_notes'),
        rate_fb_video_min: fval('f_rate_fb_video_min'),
        rate_fb_video_max: fval('f_rate_fb_video_max'),
        rate_fb_video_notes: fval('f_rate_fb_video_notes'),
        rate_fb_photo_min: fval('f_rate_fb_photo_min'),
        rate_fb_photo_max: fval('f_rate_fb_photo_max'),
        rate_fb_photo_notes: fval('f_rate_fb_photo_notes'),
        rate_yt_video_min: fval('f_rate_yt_video_min'),
        rate_yt_video_max: fval('f_rate_yt_video_max'),
        rate_yt_video_notes: fval('f_rate_yt_video_notes'),
        rate_xhs_video_min: fval('f_rate_xhs_video_min'),
        rate_xhs_video_max: fval('f_rate_xhs_video_max'),
        rate_xhs_video_notes: fval('f_rate_xhs_video_notes'),
        rate_xhs_photo_min: fval('f_rate_xhs_photo_min'),
        rate_xhs_photo_max: fval('f_rate_xhs_photo_max'),
        rate_xhs_photo_notes: fval('f_rate_xhs_photo_notes'),
        content_style: fval('f_content_style'),
        email: fval('f_email'),
        phone: formatPhoneNumber(document.getElementById('f_dial_code').value, fval('f_phone')),
        location: fval('f_location'),
        notes: fval('f_notes'),
        image: '',
        profile_photo: ''
    };

    try {
        // Insert first to get the ID
        const saved = await dbInsert(entry);
        const creatorId = saved.id;

        // Upload rate card image to storage
        if (currentImageData) {
            const file = base64ToFile(currentImageData, 'rate_card.jpg');
            const compressed = await compressImage(file);
            const url = await uploadToStorage(compressed, storagePath(creatorId, 'ratecard', 'rate_card.jpg'));
            await dbUpdate(creatorId, { image: url });
        }

        // Upload profile photo to storage
        if (currentProfilePhoto) {
            const file = base64ToFile(currentProfilePhoto, 'profile.jpg');
            const url = await uploadToStorage(file, storagePath(creatorId, 'profile', 'profile.jpg'));
            await dbUpdate(creatorId, { profile_photo: url });
        }
        document.getElementById('influencerForm').reset();
        document.getElementById('processingSection').classList.add('hidden');
        document.getElementById('formSection').classList.add('hidden');
        document.getElementById('extractedText').classList.add('hidden');
        populateDialCodeSelect(document.getElementById('f_dial_code'), '+65');
        currentImageData = null;
        currentProfilePhoto = null;
        fileInput.value = '';
        document.getElementById('profilePhotoPreview').innerHTML = '<span>+</span>';
        document.querySelectorAll('.rate-cat-body').forEach(b => b.classList.remove('open'));
        document.querySelectorAll('.rate-cat-toggle').forEach(b => b.classList.remove('open'));
        document.querySelector('[data-tab="catalogue"]').click();
    } catch (err) {
        alert('Failed to save: ' + err.message);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Save to Catalogue';
    }
});

document.getElementById('clearForm').addEventListener('click', () => {
    document.getElementById('influencerForm').reset();
    document.getElementById('processingSection').classList.add('hidden');
    document.getElementById('formSection').classList.add('hidden');
    document.getElementById('extractedText').classList.add('hidden');
    populateDialCodeSelect(document.getElementById('f_dial_code'), '+65');
    currentImageData = null;
    currentProfilePhoto = null;
    fileInput.value = '';
    document.getElementById('profilePhotoPreview').innerHTML = '<span>+</span>';
    document.querySelectorAll('.rate-cat-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.rate-cat-toggle').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('input[type="hidden"]').forEach(h => h.value = '');
});

// =====================
// CATALOGUE
// =====================
let cachedCatalogue = [];
let currentView = 'list';

async function fetchCatalogue() {
    try {
        const freshData = await dbGetAll();
        if (freshData && freshData.length >= 0) {
            cachedCatalogue = freshData;
        }
    } catch {
        // Keep existing cache on network error — don't wipe it
        console.warn('Failed to fetch catalogue, using cached data');
    }
    return cachedCatalogue;
}

// One-time migration: standardize SG phone numbers with +65 prefix
let phonesMigrated = false;
async function migratePhoneNumbers() {
    if (phonesMigrated) return;
    phonesMigrated = true;
    for (const item of cachedCatalogue) {
        if (!item.phone) continue;
        const phone = item.phone.trim();
        // Skip if already has a dial code
        if (phone.startsWith('+')) continue;
        // SG numbers: 8 digits starting with 6, 8, or 9
        const digits = phone.replace(/[\s\-()]/g, '');
        if (/^[689]\d{7}$/.test(digits)) {
            const formatted = '+65 ' + digits;
            try {
                await dbUpdate(item.id, { phone: formatted });
                item.phone = formatted;
            } catch(e) { /* skip on error */ }
        }
    }
}

function getSelectedPlatform() {
    const checked = document.querySelector('input[name="filterPlatform"]:checked');
    return checked ? checked.value : '';
}

function getFiltered(catalogue) {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const platformFilter = getSelectedPlatform();
    const genderFilter = document.getElementById('filterGender').value;
    const sortBy = document.getElementById('sortBy').value;
    const followersMin = parseFollowerCount(document.getElementById('filterFollowersMin').value);
    const followersMax = parseFollowerCount(document.getElementById('filterFollowersMax').value) || Infinity;
    const rateMin = parseRateValue(document.getElementById('filterRateMin').value);
    const rateMax = parseRateValue(document.getElementById('filterRateMax').value) || Infinity;

    let filtered = catalogue.filter(item => {
        const searchable = [item.name, item.content_style, item.location, item.email,
            item.handle_ig, item.handle_tiktok, item.notes].join(' ').toLowerCase();
        if (search && !searchable.includes(search)) return false;

        if (genderFilter && (item.gender || '') !== genderFilter) return false;

        if (platformFilter === 'instagram' && !item.ig_followers) return false;
        if (platformFilter === 'tiktok' && !item.tiktok_followers) return false;
        if (platformFilter === 'facebook' && !item.fb_followers) return false;
        if (platformFilter === 'xhs' && !item.xhs_followers) return false;
        if (platformFilter === 'youtube' && !item.yt_followers) return false;

        const maxFollowers = Math.max(
            parseFollowerCount(item.ig_followers),
            parseFollowerCount(item.tiktok_followers),
            parseFollowerCount(item.fb_followers),
            parseFollowerCount(item.xhs_followers),
            parseFollowerCount(item.yt_followers)
        );
        if (followersMin && maxFollowers < followersMin) return false;
        if (followersMax < Infinity && maxFollowers > followersMax) return false;

        const allRateMins = [
            item.rate_ig_story_min, item.rate_ig_post_min, item.rate_ig_carousel_min, item.rate_ig_reel_min,
            item.rate_tiktok_video_min, item.rate_tiktok_carousel_min, item.rate_tiktok_story_min,
            item.rate_fb_video_min, item.rate_fb_photo_min, item.rate_yt_video_min,
            item.rate_xhs_video_min, item.rate_xhs_photo_min
        ].map(parseRateValue).filter(v => v > 0);
        const allRateMaxes = [
            item.rate_ig_story_max, item.rate_ig_post_max, item.rate_ig_carousel_max, item.rate_ig_reel_max,
            item.rate_tiktok_video_max, item.rate_tiktok_carousel_max, item.rate_tiktok_story_max,
            item.rate_fb_video_max, item.rate_fb_photo_max, item.rate_yt_video_max,
            item.rate_xhs_video_max, item.rate_xhs_photo_max,
            ...allRateMins
        ].map(parseRateValue).filter(v => v > 0);
        const minRate = allRateMins.length ? Math.min(...allRateMins) : 0;
        const maxRate = allRateMaxes.length ? Math.max(...allRateMaxes) : 0;
        if (rateMin && maxRate < rateMin) return false;
        if (rateMax < Infinity && minRate > rateMax) return false;

        return true;
    });

    filtered.sort((a, b) => {
        if (sortBy === 'name') return (a.name || '').localeCompare(b.name || '');
        if (sortBy === 'created') return (b.created || '').localeCompare(a.created || '');
        return parseFollowerCount(b[sortBy] || '0') - parseFollowerCount(a[sortBy] || '0');
    });

    return filtered;
}

function parseRateValue(str) {
    if (!str) return 0;
    return parseFloat(String(str).replace(/[^0-9.]/g, '')) || 0;
}

const PLATFORM_ICONS = {
    ig: { src: 'https://cdn.simpleicons.org/instagram/E4405F', alt: 'IG' },
    tiktok: { src: 'https://cdn.simpleicons.org/tiktok/000000', alt: 'TT' },
    fb: { src: 'https://cdn.simpleicons.org/facebook/1877F2', alt: 'FB' },
    yt: { src: 'https://cdn.simpleicons.org/youtube/FF0000', alt: 'YT' },
    xhs: { src: 'https://cdn.simpleicons.org/xiaohongshu/FF2442', alt: 'XHS' },
};

function platformIcon(key) {
    const p = PLATFORM_ICONS[key];
    return p ? `<img src="${p.src}" alt="${p.alt}" class="follower-icon-img">` : '';
}

function getFollowerSummary(item) {
    const parts = [];
    if (item.ig_followers) parts.push({ key: 'ig', count: item.ig_followers });
    if (item.tiktok_followers) parts.push({ key: 'tiktok', count: item.tiktok_followers });
    if (item.fb_followers) parts.push({ key: 'fb', count: item.fb_followers });
    if (item.xhs_followers) parts.push({ key: 'xhs', count: item.xhs_followers });
    if (item.yt_followers) parts.push({ key: 'yt', count: item.yt_followers });
    return parts;
}

function formatRateRange(min, max) {
    const lo = parseRateValue(min);
    const hi = parseRateValue(max);
    if (!lo && !hi) return '';
    if (lo && hi && lo !== hi) return `$${lo}-${hi}`;
    return `$${lo || hi}`;
}

function buildRateGroupHTML(label, items) {
    const filled = items.filter(([, r]) => r);
    if (!filled.length) return '';
    return `<div class="rate-group"><span class="rate-group-label">${label}</span><br>` +
        filled.map(([type, rate]) => `<span class="rate-group-value">${type}: ${rate}</span>`).join('<br>') + '</div>';
}

function makeHandleLink(handle, url) {
    if (!handle) return '';
    if (url) return `<a href="${esc(url)}" target="_blank" rel="noopener" class="handle-link" onclick="event.stopPropagation()">${esc(handle)}</a>`;
    return `<span class="row-handle">${esc(handle)}</span>`;
}

function renderListRow(item) {
    const followers = getFollowerSummary(item);
    const styles = (item.content_style || '').split(',').filter(s => s.trim());

    const igRates = [
        ['Story', formatRateRange(item.rate_ig_story_min, item.rate_ig_story_max)],
        ['Post', formatRateRange(item.rate_ig_post_min, item.rate_ig_post_max)],
        ['Reel', formatRateRange(item.rate_ig_reel_min, item.rate_ig_reel_max)],
        ['Carousel', formatRateRange(item.rate_ig_carousel_min, item.rate_ig_carousel_max)],
    ].filter(([, r]) => r);

    const ttRates = [
        ['Video', formatRateRange(item.rate_tiktok_video_min, item.rate_tiktok_video_max)],
        ['Carousel', formatRateRange(item.rate_tiktok_carousel_min, item.rate_tiktok_carousel_max)],
        ['Story', formatRateRange(item.rate_tiktok_story_min, item.rate_tiktok_story_max)],
    ].filter(([, r]) => r);

    const otherRates = [
        ['FB Vid', formatRateRange(item.rate_fb_video_min, item.rate_fb_video_max)],
        ['YT Vid', formatRateRange(item.rate_yt_video_min, item.rate_yt_video_max)],
        ['XHS Vid', formatRateRange(item.rate_xhs_video_min, item.rate_xhs_video_max)],
    ].filter(([, r]) => r);

    const handleDisplay = makeHandleLink(item.handle_ig, item.url_ig);

    return `
        <div class="influencer-row" onclick="showDetail('${item.id}')">
            <div class="row-profile">
                <div class="row-avatar">
                    ${item.profile_photo ? `<img src="${item.profile_photo}" alt="">` : esc(getInitials(item.name))}
                </div>
                <div>
                    <div class="row-name">${esc(item.name)}</div>
                    ${handleDisplay || (item.email ? `<div class="row-handle">${esc(item.email)}</div>` : '')}
                    ${item.location ? `<div class="row-location">${esc(item.location)}</div>` : ''}
                </div>
            </div>
            <div>
                ${followers.map(f =>
                    `<div class="row-stat"><span class="row-stat-icon">${platformIcon(f.key)}</span><span class="row-stat-count">${esc(f.count)}</span></div>`
                ).join('')}
                ${!followers.length ? '<span class="row-stat-sub">-</span>' : ''}
            </div>
            <div>
                <div class="row-tags">
                    ${styles.slice(0, 3).map(s => `<span class="row-tag">${esc(s.trim())}</span>`).join('')}
                </div>
            </div>
            <div class="rate-group">
                ${igRates.length ? igRates.map(([t, r]) => `<div><span class="rate-group-label">${t}</span> <span class="rate-group-value">${r}</span></div>`).join('') : '-'}
            </div>
            <div class="rate-group">
                ${ttRates.length ? ttRates.map(([t, r]) => `<div><span class="rate-group-label">${t}</span> <span class="rate-group-value">${r}</span></div>`).join('') : '-'}
            </div>
            <div class="rate-group">
                ${otherRates.length ? otherRates.map(([t, r]) => `<div><span class="rate-group-label">${t}</span> <span class="rate-group-value">${r}</span></div>`).join('') : '-'}
            </div>
            <div class="row-actions">
                <button class="row-btn row-btn-quote ${quotationList.some(q => q.id === item.id) ? 'added' : ''}" onclick="event.stopPropagation(); addToQuote('${item.id}')" title="Add to Quotation">${quotationList.some(q => q.id === item.id) ? '&#x2713;' : '+ Quote'}</button>
                <button class="row-btn" onclick="event.stopPropagation(); showDetail('${item.id}')">View</button>
                <button class="row-btn row-btn-danger" onclick="event.stopPropagation(); deleteEntry('${item.id}')">&#x2715;</button>
            </div>
        </div>`;
}

function renderGridCard(item) {
    const styles = (item.content_style || '').split(',').filter(s => s.trim());
    const rateItems = [
        ['IG Story', item.rate_ig_story_min, item.rate_ig_story_max],
        ['IG Reel', item.rate_ig_reel_min, item.rate_ig_reel_max],
        ['IG Post', item.rate_ig_post_min, item.rate_ig_post_max],
        ['TikTok', item.rate_tiktok_video_min, item.rate_tiktok_video_max],
        ['FB Video', item.rate_fb_video_min, item.rate_fb_video_max],
        ['YT Video', item.rate_yt_video_min, item.rate_yt_video_max],
    ].filter(([, min, max]) => parseRateValue(min) || parseRateValue(max));

    const followers = getFollowerSummary(item);

    return `
        <div class="grid-card" onclick="showDetail('${item.id}')">
            <div class="card-actions-row">
                <button class="row-btn row-btn-quote ${quotationList.some(q => q.id === item.id) ? 'added' : ''}" onclick="event.stopPropagation(); addToQuote('${item.id}')">${quotationList.some(q => q.id === item.id) ? '&#x2713;' : '+ Quote'}</button>
                <button class="row-btn row-btn-danger" onclick="event.stopPropagation(); deleteEntry('${item.id}')">&#x2715;</button>
            </div>
            <div class="card-header">
                <div class="card-avatar">
                    ${item.profile_photo ? `<img src="${item.profile_photo}" alt="">` : esc(getInitials(item.name))}
                </div>
                <div>
                    <div class="card-name">${esc(item.name)}</div>
                    <div class="card-handle">${esc(item.handle_ig || item.location || '')}</div>
                </div>
            </div>
            ${styles.length ? `<div class="card-style">${styles.slice(0, 4).map(s => `<span class="tag">${esc(s.trim())}</span>`).join('')}</div>` : ''}
            <div class="card-followers">
                ${followers.map(f =>
                    `<span class="follower-badge">${platformIcon(f.key)} ${esc(f.count)}</span>`
                ).join('')}
            </div>
            <div class="card-rates">
                ${rateItems.slice(0, 4).map(([label, min, max]) =>
                    `<div class="rate-item"><span class="rate-label">${label}</span><span class="rate-value">${formatRateRange(min, max)}</span></div>`
                ).join('')}
            </div>
        </div>`;
}

const ITEMS_PER_PAGE = 25;
let currentPage = 1;

let lastFetchTime = 0;
const FETCH_COOLDOWN = 3000; // Don't re-fetch more than once every 3 seconds

async function renderCatalogue() {
    const container = document.getElementById('catalogueGrid');
    const empty = document.getElementById('emptyState');
    const listHeader = document.querySelector('.list-header');
    const paginationEl = document.getElementById('pagination');

    // Show loading state on first load only
    if (!cachedCatalogue.length) {
        empty.classList.add('hidden');
        container.innerHTML = '<div style="text-align:center;padding:2rem;color:#999;">Loading...</div>';
    }

    // Only fetch from DB if cache is empty or cooldown has passed
    const now = Date.now();
    if (!cachedCatalogue.length || now - lastFetchTime > FETCH_COOLDOWN) {
        lastFetchTime = now;
        await fetchCatalogue();
        migratePhoneNumbers();
    }

    const catalogue = cachedCatalogue;

    const filtered = getFiltered(catalogue);

    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageItems = filtered.slice(start, start + ITEMS_PER_PAGE);

    document.getElementById('resultCount').textContent = `${filtered.length} profile${filtered.length !== 1 ? 's' : ''}`;

    if (filtered.length === 0) {
        container.innerHTML = '';
        container.className = '';
        if (listHeader) listHeader.style.display = 'none';
        empty.classList.remove('hidden');
        paginationEl.classList.add('hidden');
        return;
    }

    empty.classList.add('hidden');

    if (currentView === 'list') {
        container.className = 'catalogue-list';
        if (listHeader) listHeader.style.display = '';
        container.innerHTML = pageItems.map(renderListRow).join('');
    } else {
        container.className = 'catalogue-grid-view';
        if (listHeader) listHeader.style.display = 'none';
        container.innerHTML = pageItems.map(renderGridCard).join('');
    }

    // Update pagination
    if (totalPages > 1) {
        paginationEl.classList.remove('hidden');
        document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages}`;
        document.getElementById('prevPage').disabled = currentPage <= 1;
        document.getElementById('nextPage').disabled = currentPage >= totalPages;
    } else {
        paginationEl.classList.add('hidden');
    }
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) { currentPage--; renderCatalogue(); }
});

document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    renderCatalogue();
});

function parseFollowerCount(str) {
    if (!str) return 0;
    const num = parseFloat(String(str).replace(/[^0-9.]/g, ''));
    if (String(str).toLowerCase().includes('m')) return num * 1000000;
    if (String(str).toLowerCase().includes('k')) return num * 1000;
    return num || 0;
}

function getInitials(name) {
    if (!name) return '?';
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function esc(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
}

let editingItemId = null;

async function showDetail(id) {
    // Re-fetch from DB to ensure fresh data (especially attachments)
    let item;
    try {
        item = await dbGetOne(id);
        // Update cache
        const idx = cachedCatalogue.findIndex(i => String(i.id) === String(id));
        if (idx >= 0) cachedCatalogue[idx] = item;
    } catch(e) {
        item = cachedCatalogue.find(i => String(i.id) === String(id));
    }
    if (!item) return;
    editingItemId = item.id;

    const modal = document.getElementById('modal');
    const body = document.getElementById('modalBody');

    const rateRows = [
        ['IG Story', item.rate_ig_story_min, item.rate_ig_story_max, item.rate_ig_story_notes],
        ['IG Static Post', item.rate_ig_post_min, item.rate_ig_post_max, item.rate_ig_post_notes],
        ['IG Carousel', item.rate_ig_carousel_min, item.rate_ig_carousel_max, item.rate_ig_carousel_notes],
        ['IG Reel', item.rate_ig_reel_min, item.rate_ig_reel_max, item.rate_ig_reel_notes],
        ['TikTok Video', item.rate_tiktok_video_min, item.rate_tiktok_video_max, item.rate_tiktok_video_notes],
        ['TikTok Carousel', item.rate_tiktok_carousel_min, item.rate_tiktok_carousel_max, item.rate_tiktok_carousel_notes],
        ['TikTok Story', item.rate_tiktok_story_min, item.rate_tiktok_story_max, item.rate_tiktok_story_notes],
        ['Facebook Video', item.rate_fb_video_min, item.rate_fb_video_max, item.rate_fb_video_notes],
        ['Facebook Photo', item.rate_fb_photo_min, item.rate_fb_photo_max, item.rate_fb_photo_notes],
        ['YouTube Video', item.rate_yt_video_min, item.rate_yt_video_max, item.rate_yt_video_notes],
        ['XHS Video', item.rate_xhs_video_min, item.rate_xhs_video_max, item.rate_xhs_video_notes],
        ['XHS Photo', item.rate_xhs_photo_min, item.rate_xhs_photo_max, item.rate_xhs_photo_notes],
    ].filter(([, min, max]) => parseRateValue(min) || parseRateValue(max));

    const handles = [
        ['Instagram', item.handle_ig, item.url_ig],
        ['TikTok', item.handle_tiktok, item.url_tiktok],
        ['Facebook', item.handle_fb, item.url_fb],
        ['YouTube', item.handle_yt, item.url_yt],
        ['Xiao Hong Shu', item.handle_xhs, item.url_xhs],
    ].filter(([, v]) => v);

    // Parse attachments for view mode
    let attachments = [];
    try { attachments = item.attachments ? JSON.parse(item.attachments) : []; } catch(e) {}

    const viewAttachmentsHTML = attachments.length ? attachments.map((att, i) => `
        <div class="attachment-view-item" style="margin-bottom:0.75rem;">
            <div class="section-header-row" style="margin-bottom:0.4rem;">
                <span style="font-size:0.85rem;color:#666;font-weight:600;">${esc(att.name || (att.type === 'pdf' ? 'PDF Document' : 'Image'))}</span>
                <button class="download-btn" onclick="event.stopPropagation(); downloadAttachment(${i})"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download</button>
            </div>
            ${att.type === 'image' ? `<img src="${att.url || att.data}" style="max-width:100%;border-radius:8px;cursor:pointer;" onclick="viewAttachment(${i})">` :
              `<div class="attachment-file-view" onclick="viewAttachment(${i})" style="display:flex;align-items:center;gap:8px;padding:1rem;background:#f8f8ff;border-radius:8px;cursor:pointer;border:1px solid #e5e5f0;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c5cfc" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <span style="font-size:0.95rem;color:#333;">${esc(att.name || 'PDF')}</span>
              </div>`}
        </div>
    `).join('') : '';

    body.innerHTML = `
        <div class="modal-detail">
            <div class="modal-header-row">
                <div class="modal-avatar">
                    ${item.profile_photo ? `<img src="${item.profile_photo}" alt="${esc(item.name)}">` : esc(getInitials(item.name))}
                </div>
                <div>
                    <h2>${esc(item.name)}</h2>
                    ${item.gender ? `<span style="color:#888;font-size:0.85rem">${esc(item.gender)}</span> &middot; ` : ''}
                    <span class="card-location">${esc(item.location || '')}</span>
                </div>
                <button class="btn secondary btn-sm modal-edit-btn" id="modalEditBtn" style="margin-left:auto">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    Edit
                </button>
            </div>
            ${item.content_style ? `<div class="card-style" style="margin-top:0.5rem">${item.content_style.split(',').map(s => `<span class="tag">${esc(s.trim())}</span>`).join('')}</div>` : ''}

            ${handles.length ? `
            <div class="detail-section">
                <h4>Profiles</h4>
                <div class="detail-grid">
                    ${handles.map(([label, handle, url]) =>
                        `<div class="detail-item"><span class="label">${label}</span><span class="value">${url ? `<a href="${esc(url)}" target="_blank" rel="noopener" class="handle-link">${esc(handle)}</a>` : esc(handle)}</span></div>`
                    ).join('')}
                </div>
            </div>` : ''}

            <div class="detail-section">
                <h4>Followers</h4>
                <div class="detail-grid">
                    ${item.ig_followers ? `<div class="detail-item"><span class="label">Instagram</span><span class="value">${esc(item.ig_followers)}</span></div>` : ''}
                    ${item.tiktok_followers ? `<div class="detail-item"><span class="label">TikTok</span><span class="value">${esc(item.tiktok_followers)}</span></div>` : ''}
                    ${item.fb_followers ? `<div class="detail-item"><span class="label">Facebook</span><span class="value">${esc(item.fb_followers)}</span></div>` : ''}
                    ${item.xhs_followers ? `<div class="detail-item"><span class="label">Xiao Hong Shu</span><span class="value">${esc(item.xhs_followers)}</span></div>` : ''}
                    ${item.yt_followers ? `<div class="detail-item"><span class="label">YouTube</span><span class="value">${esc(item.yt_followers)}</span></div>` : ''}
                </div>
            </div>

            ${rateRows.length ? `
            <div class="detail-section">
                <h4>Rates (SGD)</h4>
                <div class="detail-grid">
                    ${rateRows.map(([label, min, max, notes]) =>
                        `<div class="detail-item"><span class="label">${label}</span><span class="value">${formatRateRange(min, max)}${notes ? ` <span style="color:#999;font-size:0.8rem">(${esc(notes)})</span>` : ''}</span></div>`
                    ).join('')}
                </div>
            </div>` : ''}

            <div class="detail-section">
                <h4>Contact</h4>
                <div class="contact-info">
                    ${item.email ? `<p><strong>Email:</strong> ${esc(item.email)}</p>` : ''}
                    ${item.phone ? `<p><strong>Phone:</strong> ${esc(item.phone)}</p>` : ''}
                </div>
            </div>

            ${item.notes ? `<div class="detail-section"><h4>Notes</h4><p>${esc(item.notes)}</p></div>` : ''}

            ${item.image ? `<div class="detail-section"><div class="section-header-row"><h4>Original Rate Card</h4><button class="download-btn" onclick="downloadRateCard('${item.id}')"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download</button></div><img src="${item.image}" style="max-width:100%;border-radius:8px;margin-top:0.5rem;"></div>` : ''}

            ${viewAttachmentsHTML ? `<div class="detail-section"><h4>Attachments</h4>${viewAttachmentsHTML}</div>` : ''}
        </div>
    `;

    // Bind edit button
    document.getElementById('modalEditBtn').addEventListener('click', () => showEditMode(item.id));

    modal.classList.remove('hidden');
}

async function showEditMode(id) {
    let item;
    try {
        item = await dbGetOne(id);
        const idx = cachedCatalogue.findIndex(i => String(i.id) === String(id));
        if (idx >= 0) cachedCatalogue[idx] = item;
    } catch(e) {
        item = cachedCatalogue.find(i => String(i.id) === String(id));
    }
    if (!item) return;
    editingItemId = item.id;

    const body = document.getElementById('modalBody');

    const allRateRows = [
        ['IG Story', 'rate_ig_story_min', 'rate_ig_story_max', 'rate_ig_story_notes'],
        ['IG Static Post', 'rate_ig_post_min', 'rate_ig_post_max', 'rate_ig_post_notes'],
        ['IG Carousel', 'rate_ig_carousel_min', 'rate_ig_carousel_max', 'rate_ig_carousel_notes'],
        ['IG Reel', 'rate_ig_reel_min', 'rate_ig_reel_max', 'rate_ig_reel_notes'],
        ['TikTok Video', 'rate_tiktok_video_min', 'rate_tiktok_video_max', 'rate_tiktok_video_notes'],
        ['TikTok Carousel', 'rate_tiktok_carousel_min', 'rate_tiktok_carousel_max', 'rate_tiktok_carousel_notes'],
        ['TikTok Story', 'rate_tiktok_story_min', 'rate_tiktok_story_max', 'rate_tiktok_story_notes'],
        ['Facebook Video', 'rate_fb_video_min', 'rate_fb_video_max', 'rate_fb_video_notes'],
        ['Facebook Photo', 'rate_fb_photo_min', 'rate_fb_photo_max', 'rate_fb_photo_notes'],
        ['YouTube Video', 'rate_yt_video_min', 'rate_yt_video_max', 'rate_yt_video_notes'],
        ['XHS Video', 'rate_xhs_video_min', 'rate_xhs_video_max', 'rate_xhs_video_notes'],
        ['XHS Photo', 'rate_xhs_photo_min', 'rate_xhs_photo_max', 'rate_xhs_photo_notes'],
    ];

    const rateRowsHTML = allRateRows.map(([label, minKey, maxKey, notesKey]) => {
        return `<div class="edit-rate-row">
            <span class="edit-rate-label">${label}</span>
            <input type="text" class="edit-rate-input" data-field="${minKey}" value="${esc(item[minKey] || '')}" placeholder="Min">
            <span class="rate-sep">-</span>
            <input type="text" class="edit-rate-input" data-field="${maxKey}" value="${esc(item[maxKey] || '')}" placeholder="Max">
            <input type="text" class="edit-rate-notes" data-field="${notesKey}" value="${esc(item[notesKey] || '')}" placeholder="Notes">
        </div>`;
    }).join('');

    const platforms = [
        ['Instagram', 'handle_ig', 'url_ig', 'ig_followers'],
        ['TikTok', 'handle_tiktok', 'url_tiktok', 'tiktok_followers'],
        ['Facebook', 'handle_fb', 'url_fb', 'fb_followers'],
        ['YouTube', 'handle_yt', 'url_yt', 'yt_followers'],
        ['Xiao Hong Shu', 'handle_xhs', 'url_xhs', 'xhs_followers'],
    ];

    const platformsHTML = platforms.map(([label, handleKey, urlKey, followersKey]) => `
        <div class="edit-platform-row">
            <span class="edit-platform-label">${label}</span>
            <input type="text" data-field="${handleKey}" value="${esc(item[handleKey] || '')}" placeholder="@handle">
            <input type="text" data-field="${urlKey}" value="${esc(item[urlKey] || '')}" placeholder="URL">
            <input type="text" data-field="${followersKey}" value="${esc(item[followersKey] || '')}" placeholder="Followers">
        </div>
    `).join('');

    let attachments = [];
    try { attachments = item.attachments ? JSON.parse(item.attachments) : []; } catch(e) {}

    const attachmentsHTML = attachments.map((att, i) => `
        <div class="attachment-item-edit" data-index="${i}" style="position:relative;margin-bottom:0.75rem;">
            ${att.type === 'image' ? `<img src="${att.url || att.data}" style="max-width:100%;border-radius:8px;cursor:pointer;" onclick="viewAttachment(${i})">` :
              `<div onclick="viewAttachment(${i})" style="display:flex;align-items:center;gap:8px;padding:1rem;background:#f8f8ff;border-radius:8px;cursor:pointer;border:1px solid #e5e5f0;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c5cfc" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <span style="font-size:0.95rem;color:#333;">${esc(att.name || 'PDF')}</span>
              </div>`}
            <button class="att-remove" onclick="removeAttachment(${i})" style="position:absolute;top:8px;right:8px;">&times;</button>
        </div>
    `).join('');

    body.innerHTML = `
        <div class="modal-detail modal-edit">
            <div class="modal-header-row">
                <div class="modal-avatar profile-photo-upload" id="profilePhotoUpload" title="Click to change profile photo" style="cursor:pointer;position:relative;">
                    ${item.profile_photo ? `<img src="${item.profile_photo}" alt="${esc(item.name)}">` : esc(getInitials(item.name))}
                    <div class="photo-upload-overlay">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    </div>
                    <input type="file" id="profilePhotoInput" accept="image/jpeg,image/png" hidden>
                </div>
                <div style="flex:1">
                    <input type="text" class="edit-field edit-name" data-field="name" value="${esc(item.name)}" placeholder="Name">
                    <div class="edit-row-inline">
                        <select class="edit-field edit-small" data-field="gender">
                            <option value="">Gender</option>
                            <option value="Male" ${item.gender === 'Male' ? 'selected' : ''}>Male</option>
                            <option value="Female" ${item.gender === 'Female' ? 'selected' : ''}>Female</option>
                        </select>
                        <input type="text" class="edit-field edit-small" data-field="location" value="${esc(item.location || '')}" placeholder="Location">
                    </div>
                </div>
            </div>

            <div class="edit-field-group">
                <label>Content Style</label>
                <input type="text" class="edit-field" data-field="content_style" value="${esc(item.content_style || '')}" placeholder="e.g. Fashion, Beauty, Lifestyle">
            </div>

            <div class="detail-section">
                <h4>Profiles & Followers</h4>
                <div class="edit-platforms">${platformsHTML}</div>
            </div>

            <div class="detail-section">
                <h4>Rates (SGD)</h4>
                <div class="edit-rates">${rateRowsHTML}</div>
            </div>

            <div class="detail-section">
                <h4>Contact</h4>
                <div class="edit-row-inline">
                    <input type="text" class="edit-field" data-field="email" value="${esc(item.email || '')}" placeholder="Email">
                    <div class="edit-phone-group">
                        <select class="dial-code-select" id="editDialCode"></select>
                        <input type="text" class="edit-field" data-field="phone" id="editPhoneNumber" value="${esc(parsePhoneNumber(item.phone).number)}" placeholder="9123 4567">
                    </div>
                </div>
            </div>

            <div class="edit-field-group">
                <label>Notes</label>
                <textarea class="edit-field" data-field="notes" rows="3" placeholder="Notes">${esc(item.notes || '')}</textarea>
            </div>

            ${item.image ? `<div class="detail-section"><h4>Original Rate Card</h4><img src="${item.image}" style="max-width:100%;border-radius:8px;margin-top:0.5rem;"></div>` : ''}

            <div class="detail-section">
                <h4>Attachments</h4>
                <div class="attachments-grid" id="modalAttachments">${attachmentsHTML || '<span class="att-empty">No attachments</span>'}</div>
                <label class="att-upload-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    Add Attachment
                    <input type="file" id="modalAttachmentInput" accept="image/jpeg,image/png,application/pdf" multiple hidden>
                </label>
            </div>

            <div class="modal-edit-actions">
                <button class="btn primary" id="modalSaveBtn">Save Changes</button>
                <button class="btn secondary" id="modalCancelBtn">Cancel</button>
            </div>
        </div>
    `;

    // Populate edit dial code and set to matching code
    const editParsed = parsePhoneNumber(item.phone);
    populateDialCodeSelect(document.getElementById('editDialCode'), editParsed.dialCode);

    document.getElementById('modalSaveBtn').addEventListener('click', () => saveModalEdits(item.id));
    document.getElementById('modalCancelBtn').addEventListener('click', () => showDetail(item.id));
    document.getElementById('modalAttachmentInput').addEventListener('change', e => {
        handleAttachmentUpload(e.target.files, item.id);
    });

    // Profile photo upload
    document.getElementById('profilePhotoUpload').addEventListener('click', (e) => {
        if (e.target.closest('.photo-upload-overlay') || e.target.closest('.modal-avatar')) {
            document.getElementById('profilePhotoInput').click();
        }
    });
    document.getElementById('profilePhotoInput').addEventListener('change', e => {
        handleProfilePhotoUpload(e.target.files[0], item.id);
    });
}

async function handleAttachmentUpload(files, itemId) {
    try {
        // Re-fetch latest from DB
        const freshItem = await dbGetOne(itemId);
        let attachments = [];
        try { attachments = freshItem.attachments ? JSON.parse(freshItem.attachments) : []; } catch(e) {}

        for (const file of files) {
            if (!file.type.match(/image\/(jpeg|png)/) && file.type !== 'application/pdf') continue;
            const compressed = await compressImage(file);
            const path = storagePath(itemId, 'attachments', file.name);
            const url = await uploadToStorage(compressed, path);
            attachments.push({
                name: file.name,
                type: file.type === 'application/pdf' ? 'pdf' : 'image',
                url: url,
                path: path,
                added: new Date().toISOString()
            });
        }

        await dbUpdate(itemId, { attachments: JSON.stringify(attachments) });
        // Update cache
        const cachedItem = cachedCatalogue.find(i => String(i.id) === String(itemId));
        if (cachedItem) cachedItem.attachments = JSON.stringify(attachments);
        showEditMode(itemId);
    } catch (err) {
        alert('Failed to upload attachment: ' + err.message);
    }
}

async function handleProfilePhotoUpload(file, itemId) {
    if (!file || !file.type.match(/image\/(jpeg|png)/)) {
        alert('Please select a JPG or PNG image.');
        return;
    }
    try {
        const compressed = await compressImage(file, 400, 0.85);
        const url = await uploadToStorage(compressed, storagePath(itemId, 'profile', 'profile.jpg'));
        await dbUpdate(itemId, { profile_photo: url });
        const cachedItem = cachedCatalogue.find(i => String(i.id) === String(itemId));
        if (cachedItem) cachedItem.profile_photo = url;
        showEditMode(itemId);
        renderCatalogue();
    } catch (err) {
        alert('Failed to upload profile photo: ' + err.message);
    }
}

function downloadFile(url, filename) {
    if (isStorageUrl(url)) {
        // For storage URLs, fetch and download as blob
        fetch(url)
            .then(r => r.blob())
            .then(blob => {
                const a = document.createElement('a');
                a.href = URL.createObjectURL(blob);
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(a.href);
            })
            .catch(() => window.open(url, '_blank'));
    } else {
        // Legacy base64
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

function downloadRateCard(itemId) {
    const item = cachedCatalogue.find(i => String(i.id) === String(itemId));
    if (!item || !item.image) return;
    const ext = item.image.includes('.png') || item.image.startsWith('data:image/png') ? 'png' : 'jpg';
    downloadFile(item.image, `${(item.name || 'rate-card').replace(/\s+/g, '_')}_rate_card.${ext}`);
}

function downloadAttachment(index) {
    const item = cachedCatalogue.find(i => String(i.id) === String(editingItemId));
    if (!item) return;
    let attachments = [];
    try { attachments = JSON.parse(item.attachments); } catch(e) {}
    const att = attachments[index];
    if (!att) return;
    const filename = att.name || (att.type === 'pdf' ? 'attachment.pdf' : 'attachment.jpg');
    const src = att.url || att.data;
    downloadFile(src, filename);
}

function viewAttachment(index) {
    const item = cachedCatalogue.find(i => String(i.id) === String(editingItemId));
    if (!item) return;
    let attachments = [];
    try { attachments = JSON.parse(item.attachments); } catch(e) {}
    const att = attachments[index];
    if (!att) return;

    const src = att.url || att.data; // support both storage URL and legacy base64
    if (att.type === 'image') {
        window.open(src, '_blank');
    } else {
        window.open(src, '_blank');
    }
}

async function removeAttachment(index) {
    try {
        const freshItem = await dbGetOne(editingItemId);
        let attachments = [];
        try { attachments = JSON.parse(freshItem.attachments); } catch(e) {}
        const removed = attachments.splice(index, 1);
        // Delete from storage if it has a path
        if (removed[0] && removed[0].path) {
            await deleteFromStorage(removed[0].path);
        }
        await dbUpdate(editingItemId, { attachments: JSON.stringify(attachments) });
        const cachedItem = cachedCatalogue.find(i => String(i.id) === String(editingItemId));
        if (cachedItem) cachedItem.attachments = JSON.stringify(attachments);
        showEditMode(editingItemId);
    } catch (err) {
        alert('Failed to remove attachment: ' + err.message);
    }
}

async function saveModalEdits(id) {
    const btn = document.getElementById('modalSaveBtn');
    btn.disabled = true;
    btn.textContent = 'Saving...';

    const updates = {};
    document.querySelectorAll('.modal-edit [data-field]').forEach(el => {
        updates[el.dataset.field] = el.value || '';
    });

    // Combine dial code + phone number
    const editDialCode = document.getElementById('editDialCode');
    if (editDialCode && updates.phone !== undefined) {
        updates.phone = formatPhoneNumber(editDialCode.value, updates.phone);
    }

    for (const f of ['ig_followers', 'tiktok_followers', 'fb_followers', 'yt_followers', 'xhs_followers']) {
        if (updates[f] !== undefined) {
            updates[f + '_raw'] = String(parseSmartNumber(updates[f]) || '');
        }
    }

    try {
        await dbUpdate(id, updates);
        const item = cachedCatalogue.find(i => String(i.id) === String(id));
        if (item) Object.assign(item, updates);
        showDetail(id);
        renderCatalogue();
    } catch (err) {
        alert('Failed to save: ' + err.message);
    } finally {
        btn.disabled = false;
        btn.textContent = 'Save Changes';
    }
}

async function deleteEntry(id) {
    if (!confirm('Delete this influencer from the catalogue?')) return;
    await dbDelete(id);
    renderCatalogue();
}

document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
});

document.getElementById('modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) document.getElementById('modal').classList.add('hidden');
});

// Search & filter
let searchTimer;
function debounceRender() {
    clearTimeout(searchTimer);
    currentPage = 1;
    searchTimer = setTimeout(renderCatalogue, 250);
}

function filterChanged() {
    currentPage = 1;
    renderCatalogue();
}

document.getElementById('searchInput').addEventListener('input', debounceRender);
document.getElementById('filterFollowersMin').addEventListener('input', debounceRender);
document.getElementById('filterFollowersMax').addEventListener('input', debounceRender);
document.getElementById('filterRateMin').addEventListener('input', debounceRender);
document.getElementById('filterRateMax').addEventListener('input', debounceRender);
document.getElementById('filterGender').addEventListener('change', filterChanged);
document.querySelectorAll('input[name="filterPlatform"]').forEach(r => r.addEventListener('change', filterChanged));
document.getElementById('sortBy').addEventListener('change', filterChanged);

// View toggle
document.getElementById('viewList').addEventListener('click', () => {
    currentView = 'list';
    document.getElementById('viewList').classList.add('active');
    document.getElementById('viewGrid').classList.remove('active');
    renderCatalogue();
});
document.getElementById('viewGrid').addEventListener('click', () => {
    currentView = 'grid';
    document.getElementById('viewGrid').classList.add('active');
    document.getElementById('viewList').classList.remove('active');
    renderCatalogue();
});

// Reset filters
document.getElementById('resetFilters').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    document.getElementById('filterGender').value = '';
    document.querySelector('input[name="filterPlatform"][value=""]').checked = true;
    document.getElementById('filterFollowersMin').value = '';
    document.getElementById('filterFollowersMax').value = '';
    document.getElementById('filterRateMin').value = '';
    document.getElementById('filterRateMax').value = '';
    renderCatalogue();
});

// Export CSV
document.getElementById('exportBtn').addEventListener('click', async () => {
    const catalogue = await fetchCatalogue();
    if (!catalogue.length) { alert('No data to export.'); return; }

    const headers = ['Name', 'Gender', 'IG Handle', 'IG URL', 'TikTok Handle', 'TikTok URL',
        'FB Handle', 'YT Handle', 'XHS Handle',
        'IG Followers', 'TikTok Followers', 'FB Followers', 'XHS Followers', 'YT Followers',
        'Content Style', 'IG Story Min', 'IG Story Max', 'IG Post Min', 'IG Post Max',
        'IG Carousel Min', 'IG Carousel Max', 'IG Reel Min', 'IG Reel Max',
        'TikTok Video Min', 'TikTok Video Max', 'Email', 'Phone', 'Location', 'Notes'];
    const keys = ['name', 'gender', 'handle_ig', 'url_ig', 'handle_tiktok', 'url_tiktok',
        'handle_fb', 'handle_yt', 'handle_xhs',
        'ig_followers', 'tiktok_followers', 'fb_followers', 'xhs_followers', 'yt_followers',
        'content_style', 'rate_ig_story_min', 'rate_ig_story_max', 'rate_ig_post_min', 'rate_ig_post_max',
        'rate_ig_carousel_min', 'rate_ig_carousel_max', 'rate_ig_reel_min', 'rate_ig_reel_max',
        'rate_tiktok_video_min', 'rate_tiktok_video_max', 'email', 'phone', 'location', 'notes'];

    const csvRows = [headers.join(',')];
    for (const item of catalogue) {
        csvRows.push(keys.map(k => `"${(item[k] || '').replace(/"/g, '""')}"`).join(','));
    }

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'influencer_catalogue.csv';
    a.click();
    URL.revokeObjectURL(url);
});

// =====================
// QUOTATION BUILDER
// =====================
let quotationList = []; // Array of { id, name, profile_photo, handle_ig, deliverables: [{ desc, amount }] }

function addToQuote(id) {
    if (quotationList.some(q => q.id == id)) return;
    const item = cachedCatalogue.find(i => String(i.id) === String(id));
    if (!item) return;

    quotationList.push({
        id: item.id,
        name: item.name,
        profile_photo: item.profile_photo || '',
        handle_ig: item.handle_ig || item.handle_tiktok || '',
        deliverables: [{ desc: '', amount: '' }]
    });

    renderCatalogue(); // re-render to update button state
    renderQuotation();
}

function removeFromQuote(id) {
    quotationList = quotationList.filter(q => q.id != id);
    renderCatalogue();
    renderQuotation();
}

function addDeliverable(id) {
    const entry = quotationList.find(q => q.id == id);
    if (entry) {
        entry.deliverables.push({ desc: '', amount: '' });
        renderQuotation();
    }
}

function removeDeliverable(id, idx) {
    const entry = quotationList.find(q => q.id == id);
    if (entry && entry.deliverables.length > 1) {
        entry.deliverables.splice(idx, 1);
        renderQuotation();
    }
}

function updateDeliverable(id, idx, field, value) {
    const entry = quotationList.find(q => q.id == id);
    if (entry && entry.deliverables[idx]) {
        entry.deliverables[idx][field] = value;
        updateQuoteTotal();
    }
}

function updateQuoteTotal() {
    let total = 0;
    quotationList.forEach(q => {
        q.deliverables.forEach(d => {
            total += parseFloat(d.amount) || 0;
        });
    });
    document.getElementById('quoteTotal').textContent = '$' + total.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

function getCreatorSubtotal(entry) {
    return entry.deliverables.reduce((sum, d) => sum + (parseFloat(d.amount) || 0), 0);
}

function renderQuotation() {
    const empty = document.getElementById('quoteEmpty');
    const content = document.getElementById('quoteContent');
    const rowsEl = document.getElementById('quoteRows');

    if (!quotationList.length) {
        empty.classList.remove('hidden');
        content.classList.add('hidden');
        return;
    }

    empty.classList.add('hidden');
    content.classList.remove('hidden');

    rowsEl.innerHTML = quotationList.map(q => {
        const subtotal = getCreatorSubtotal(q);
        return `
        <div class="quote-row">
            <div class="qr-profile">
                <div class="qr-avatar">
                    ${q.profile_photo ? `<img src="${q.profile_photo}" alt="">` : esc(getInitials(q.name))}
                </div>
                <div>
                    <div class="qr-name">${esc(q.name)}</div>
                    ${q.handle_ig ? `<div class="qr-handle">${esc(q.handle_ig)}</div>` : ''}
                </div>
            </div>
            <div class="qr-deliverables">
                ${q.deliverables.map((d, i) => `
                    <div class="qr-deliverable-item">
                        <input type="text" value="${esc(d.desc)}" placeholder="e.g. IG Reel x1"
                            oninput="updateDeliverable(${q.id}, ${i}, 'desc', this.value)">
                        <button class="qr-del-remove" onclick="removeDeliverable(${q.id}, ${i})" title="Remove">&times;</button>
                    </div>
                `).join('')}
                <button class="qr-add-deliverable" onclick="addDeliverable(${q.id})">+ Add deliverable</button>
            </div>
            <div class="qr-amounts">
                ${q.deliverables.map((d, i) => `
                    <input type="number" class="qr-amount-input" value="${d.amount}" placeholder="0"
                        min="0" oninput="updateDeliverable(${q.id}, ${i}, 'amount', this.value)">
                `).join('')}
                ${q.deliverables.length > 1 ? `<div class="qr-subtotal">$${subtotal.toLocaleString()}</div>` : ''}
            </div>
            <div>
                <button class="qr-remove-creator" onclick="removeFromQuote(${q.id})" title="Remove creator">&times;</button>
            </div>
        </div>`;
    }).join('');

    updateQuoteTotal();
}

// Clear all quotation
document.getElementById('quoteClearAll').addEventListener('click', () => {
    if (!quotationList.length || !confirm('Clear all creators from the quotation?')) return;
    quotationList = [];
    renderCatalogue();
    renderQuotation();
});

// Export quotation as CSV
document.getElementById('quoteExport').addEventListener('click', () => {
    if (!quotationList.length) { alert('No creators in the quotation.'); return; }

    const csvRows = ['Creator,Deliverable,Amount (SGD)'];
    quotationList.forEach(q => {
        q.deliverables.forEach(d => {
            csvRows.push(`"${q.name}","${d.desc || ''}","${d.amount || 0}"`);
        });
    });

    let total = 0;
    quotationList.forEach(q => q.deliverables.forEach(d => total += parseFloat(d.amount) || 0));
    csvRows.push(`"","TOTAL","${total}"`);

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotation.csv';
    a.click();
    URL.revokeObjectURL(url);
});

// =====================
// BACKUP & RESTORE
// =====================

const BACKUP_FIELDS = [
    'name', 'gender', 'phone',
    'handle_ig', 'handle_tiktok', 'handle_fb', 'handle_yt', 'handle_xhs',
    'url_ig', 'url_tiktok', 'url_fb', 'url_yt', 'url_xhs',
    'ig_followers', 'tiktok_followers', 'fb_followers', 'xhs_followers', 'yt_followers',
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
    'content_style', 'email', 'location', 'notes',
    'image', 'profile_photo', 'attachments', 'created'
];

async function loadLastBackupDate() {
    try {
        const { data } = await supabaseClient
            .from('backup_log')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(1);
        if (data && data.length) {
            const d = new Date(data[0].created_at);
            document.getElementById('lastBackupDate').textContent = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            document.getElementById('lastBackupMeta').textContent = `${data[0].record_count} creators · ${data[0].file_name}`;
        }
    } catch { /* ignore */ }
}

async function logBackup(fileName, count) {
    try {
        await supabaseClient.from('backup_log').insert([{
            backup_type: 'manual',
            file_name: fileName,
            record_count: count
        }]);
    } catch { /* ignore */ }
}

function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
}

// Export JSON
document.getElementById('backupJSON').addEventListener('click', async () => {
    const catalogue = await fetchCatalogue();
    if (!catalogue.length) { alert('No data to export.'); return; }

    const backupData = {
        version: '1.0',
        exported_at: new Date().toISOString(),
        record_count: catalogue.length,
        data: catalogue.map(item => {
            const entry = {};
            BACKUP_FIELDS.forEach(f => entry[f] = item[f] || '');
            return entry;
        })
    };

    const fileName = `du-creatives-backup-${new Date().toISOString().slice(0, 10)}.json`;
    downloadFile(JSON.stringify(backupData, null, 2), fileName, 'application/json');
    await logBackup(fileName, catalogue.length);
    loadLastBackupDate();
});

// Export CSV
document.getElementById('backupCSV').addEventListener('click', async () => {
    const catalogue = await fetchCatalogue();
    if (!catalogue.length) { alert('No data to export.'); return; }

    const csvRows = [BACKUP_FIELDS.join(',')];
    catalogue.forEach(item => {
        csvRows.push(BACKUP_FIELDS.map(f => `"${(item[f] || '').toString().replace(/"/g, '""')}"`).join(','));
    });

    const fileName = `du-creatives-backup-${new Date().toISOString().slice(0, 10)}.csv`;
    downloadFile(csvRows.join('\n'), fileName, 'text/csv');
    await logBackup(fileName, catalogue.length);
    loadLastBackupDate();
});

// Download for Google Drive (same as JSON but named for clarity)
document.getElementById('backupDrive').addEventListener('click', () => {
    document.getElementById('backupJSON').click();
});

// Import JSON
document.getElementById('importBtn').addEventListener('click', () => {
    document.getElementById('importFileInput').click();
});

document.getElementById('importFileInput').addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;

    const statusEl = document.getElementById('importStatus');
    statusEl.textContent = 'Reading file...';
    statusEl.className = 'backup-warning';

    try {
        const text = await file.text();
        const backup = JSON.parse(text);

        if (!backup.data || !Array.isArray(backup.data)) {
            statusEl.textContent = 'Invalid backup file format.';
            statusEl.className = 'backup-warning error';
            return;
        }

        const count = backup.data.length;
        if (!confirm(`This will import ${count} creator(s) into the database. Existing records will NOT be deleted. Continue?`)) {
            statusEl.textContent = 'Import cancelled.';
            return;
        }

        statusEl.textContent = `Importing ${count} records...`;

        // Insert in batches of 50
        for (let i = 0; i < backup.data.length; i += 50) {
            const batch = backup.data.slice(i, i + 50).map(item => {
                const entry = {};
                BACKUP_FIELDS.forEach(f => {
                    if (f !== 'created') entry[f] = item[f] || '';
                });
                return entry;
            });
            const { error } = await supabaseClient.from('influencers').insert(batch);
            if (error) throw error;
            statusEl.textContent = `Imported ${Math.min(i + 50, count)} of ${count}...`;
        }

        statusEl.textContent = `Successfully imported ${count} creators!`;
        statusEl.className = 'backup-warning success';
        await logBackup('import-' + file.name, count);
        loadLastBackupDate();
        renderCatalogue();
    } catch (err) {
        statusEl.textContent = 'Import failed: ' + err.message;
        statusEl.className = 'backup-warning error';
    }

    e.target.value = '';
});

// Load backup date on tab switch
const origTabClick = document.querySelectorAll('.tab');
origTabClick.forEach(tab => {
    tab.addEventListener('click', () => {
        if (tab.dataset.tab === 'backup') loadLastBackupDate();
    });
});

// =====================
// STORAGE MIGRATION
// =====================
document.getElementById('migrateStorageBtn').addEventListener('click', async () => {
    const statusEl = document.getElementById('migrateStatus');
    const btn = document.getElementById('migrateStorageBtn');

    if (!confirm('This will migrate all existing Base64 images to Supabase Storage. Continue?')) return;

    btn.disabled = true;
    btn.textContent = 'Migrating...';
    statusEl.textContent = 'Fetching all creators...';
    statusEl.className = 'backup-warning';

    try {
        // Fetch ALL data including base64 fields
        const { data: allCreators, error } = await supabaseClient
            .from('influencers')
            .select('*')
            .order('id', { ascending: true });
        if (error) throw error;

        let migratedCount = 0;
        let skippedCount = 0;
        const total = allCreators.length;

        for (let idx = 0; idx < total; idx++) {
            const item = allCreators[idx];
            const updates = {};
            let changed = false;

            statusEl.textContent = `Processing ${idx + 1} of ${total}: ${item.name || 'Unknown'}...`;

            // Migrate rate card image
            if (item.image && !isStorageUrl(item.image) && item.image.startsWith('data:')) {
                try {
                    const file = base64ToFile(item.image, 'rate_card.jpg');
                    const compressed = await compressImage(file);
                    const url = await uploadToStorage(compressed, storagePath(item.id, 'ratecard', 'rate_card.jpg'));
                    updates.image = url;
                    changed = true;
                } catch(e) { console.warn('Failed to migrate rate card for', item.id, e); }
            }

            // Migrate profile photo
            if (item.profile_photo && !isStorageUrl(item.profile_photo) && item.profile_photo.startsWith('data:')) {
                try {
                    const file = base64ToFile(item.profile_photo, 'profile.jpg');
                    const compressed = await compressImage(file, 400, 0.85);
                    const url = await uploadToStorage(compressed, storagePath(item.id, 'profile', 'profile.jpg'));
                    updates.profile_photo = url;
                    changed = true;
                } catch(e) { console.warn('Failed to migrate profile photo for', item.id, e); }
            }

            // Migrate attachments
            if (item.attachments) {
                try {
                    let attachments = JSON.parse(item.attachments);
                    let attChanged = false;
                    for (let ai = 0; ai < attachments.length; ai++) {
                        const att = attachments[ai];
                        if (att.data && !att.url) {
                            try {
                                const file = base64ToFile(att.data, att.name || 'attachment');
                                const compressed = await compressImage(file);
                                const path = storagePath(item.id, 'attachments', att.name || 'attachment');
                                const url = await uploadToStorage(compressed, path);
                                att.url = url;
                                att.path = path;
                                delete att.data;
                                attChanged = true;
                            } catch(e) { console.warn('Failed to migrate attachment', ai, 'for', item.id, e); }
                        }
                    }
                    if (attChanged) {
                        updates.attachments = JSON.stringify(attachments);
                        changed = true;
                    }
                } catch(e) { /* not valid JSON, skip */ }
            }

            if (changed) {
                await dbUpdate(item.id, updates);
                migratedCount++;
            } else {
                skippedCount++;
            }
        }

        statusEl.textContent = `Migration complete! ${migratedCount} creators migrated, ${skippedCount} already up to date.`;
        statusEl.className = 'backup-warning success';
        // Refresh cache
        cachedCatalogue = [];
        renderCatalogue();
    } catch (err) {
        statusEl.textContent = 'Migration failed: ' + err.message;
        statusEl.className = 'backup-warning error';
    } finally {
        btn.disabled = false;
        btn.textContent = 'Start Migration';
    }
});

// Initial render
renderCatalogue();
loadLastBackupDate();
