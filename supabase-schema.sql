-- ============================================
-- DU Creatives - Supabase Database Schema
-- Run this in Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- ============================================

-- 1. App config (stores password securely, NOT in frontend code)
CREATE TABLE IF NOT EXISTS app_config (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
);

-- Insert the shared password (change this to update the password)
INSERT INTO app_config (key, value) VALUES ('access_password', 'dumedia1106')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- Admin email — access requests notify this user
INSERT INTO app_config (key, value) VALUES ('admin_email', 'your-email@example.com')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- 2. Access sessions (login requests + approval tracking)
CREATE TABLE IF NOT EXISTS access_sessions (
    id BIGSERIAL PRIMARY KEY,
    session_token TEXT UNIQUE NOT NULL,
    requester_name TEXT DEFAULT 'Anonymous',
    device_info TEXT DEFAULT '',
    status TEXT NOT NULL DEFAULT 'pending',  -- pending | approved | rejected
    created_at TIMESTAMPTZ DEFAULT NOW(),
    approved_at TIMESTAMPTZ,
    expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '7 days')
);

-- 3. Influencers table
CREATE TABLE IF NOT EXISTS influencers (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    gender TEXT DEFAULT '',
    race TEXT DEFAULT '',
    phone TEXT DEFAULT '',
    handle_ig TEXT DEFAULT '',
    handle_tiktok TEXT DEFAULT '',
    handle_fb TEXT DEFAULT '',
    handle_yt TEXT DEFAULT '',
    handle_xhs TEXT DEFAULT '',
    url_ig TEXT DEFAULT '',
    url_tiktok TEXT DEFAULT '',
    url_fb TEXT DEFAULT '',
    url_yt TEXT DEFAULT '',
    url_xhs TEXT DEFAULT '',
    ig_followers TEXT DEFAULT '',
    tiktok_followers TEXT DEFAULT '',
    fb_followers TEXT DEFAULT '',
    xhs_followers TEXT DEFAULT '',
    yt_followers TEXT DEFAULT '',
    ig_followers_raw TEXT DEFAULT '',
    tiktok_followers_raw TEXT DEFAULT '',
    fb_followers_raw TEXT DEFAULT '',
    yt_followers_raw TEXT DEFAULT '',
    xhs_followers_raw TEXT DEFAULT '',
    rate_ig_story_min TEXT DEFAULT '',
    rate_ig_story_max TEXT DEFAULT '',
    rate_ig_story_notes TEXT DEFAULT '',
    rate_ig_post_min TEXT DEFAULT '',
    rate_ig_post_max TEXT DEFAULT '',
    rate_ig_post_notes TEXT DEFAULT '',
    rate_ig_carousel_min TEXT DEFAULT '',
    rate_ig_carousel_max TEXT DEFAULT '',
    rate_ig_carousel_notes TEXT DEFAULT '',
    rate_ig_reel_min TEXT DEFAULT '',
    rate_ig_reel_max TEXT DEFAULT '',
    rate_ig_reel_notes TEXT DEFAULT '',
    rate_tiktok_video_min TEXT DEFAULT '',
    rate_tiktok_video_max TEXT DEFAULT '',
    rate_tiktok_video_notes TEXT DEFAULT '',
    rate_tiktok_carousel_min TEXT DEFAULT '',
    rate_tiktok_carousel_max TEXT DEFAULT '',
    rate_tiktok_carousel_notes TEXT DEFAULT '',
    rate_tiktok_story_min TEXT DEFAULT '',
    rate_tiktok_story_max TEXT DEFAULT '',
    rate_tiktok_story_notes TEXT DEFAULT '',
    rate_fb_video_min TEXT DEFAULT '',
    rate_fb_video_max TEXT DEFAULT '',
    rate_fb_video_notes TEXT DEFAULT '',
    rate_fb_photo_min TEXT DEFAULT '',
    rate_fb_photo_max TEXT DEFAULT '',
    rate_fb_photo_notes TEXT DEFAULT '',
    rate_yt_video_min TEXT DEFAULT '',
    rate_yt_video_max TEXT DEFAULT '',
    rate_yt_video_notes TEXT DEFAULT '',
    rate_xhs_video_min TEXT DEFAULT '',
    rate_xhs_video_max TEXT DEFAULT '',
    rate_xhs_video_notes TEXT DEFAULT '',
    rate_xhs_photo_min TEXT DEFAULT '',
    rate_xhs_photo_max TEXT DEFAULT '',
    rate_xhs_photo_notes TEXT DEFAULT '',
    content_style TEXT DEFAULT '',
    contact TEXT DEFAULT '',
    email TEXT DEFAULT '',
    location TEXT DEFAULT '',
    notes TEXT DEFAULT '',
    image TEXT DEFAULT '',
    profile_photo TEXT DEFAULT '',
    attachments TEXT DEFAULT '',
    created TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Backup log table
CREATE TABLE IF NOT EXISTS backup_log (
    id BIGSERIAL PRIMARY KEY,
    backup_type TEXT NOT NULL DEFAULT 'manual',
    file_name TEXT DEFAULT '',
    record_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. RPC function to verify password (anon can call this but CANNOT read app_config directly)
CREATE OR REPLACE FUNCTION verify_access_password(pwd TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    stored_pwd TEXT;
BEGIN
    SELECT value INTO stored_pwd FROM app_config WHERE key = 'access_password';
    RETURN stored_pwd IS NOT NULL AND stored_pwd = pwd;
END;
$$;

-- 6. RPC function to check if a session is valid
CREATE OR REPLACE FUNCTION check_session(token TEXT)
RETURNS TABLE(is_valid BOOLEAN, session_status TEXT)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN QUERY
    SELECT
        (s.status = 'approved' AND s.expires_at > NOW()) AS is_valid,
        s.status AS session_status
    FROM access_sessions s
    WHERE s.session_token = token
    LIMIT 1;

    IF NOT FOUND THEN
        RETURN QUERY SELECT false, 'not_found'::TEXT;
    END IF;
END;
$$;

-- 7. Enable Row Level Security
ALTER TABLE app_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE access_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE influencers ENABLE ROW LEVEL SECURITY;
ALTER TABLE backup_log ENABLE ROW LEVEL SECURITY;

-- 8. RLS Policies

-- app_config: NO direct access for anon (password checked via RPC function only)
-- (no policies = no access, which is what we want)

-- access_sessions: anon can insert (create request) and read (check own status)
CREATE POLICY "Anyone can create access request"
    ON access_sessions FOR INSERT
    TO anon
    WITH CHECK (true);

CREATE POLICY "Anyone can read access sessions"
    ON access_sessions FOR SELECT
    TO anon
    USING (true);

CREATE POLICY "Anyone can update access sessions"
    ON access_sessions FOR UPDATE
    TO anon
    USING (true);

-- influencers: anon can do everything (access control is via session check in frontend)
-- The Supabase project URL + anon key are the security perimeter
CREATE POLICY "Anon full access to influencers"
    ON influencers FOR ALL
    TO anon
    USING (true)
    WITH CHECK (true);

-- backup_log: anon full access
CREATE POLICY "Anon full access to backup_log"
    ON backup_log FOR ALL
    TO anon
    USING (true)
    WITH CHECK (true);

-- 9. Enable Realtime for access_sessions (so login page can listen for approval)
ALTER PUBLICATION supabase_realtime ADD TABLE access_sessions;

-- 10. Indexes
CREATE INDEX IF NOT EXISTS idx_influencers_created ON influencers (created DESC);
CREATE INDEX IF NOT EXISTS idx_influencers_name ON influencers (name);
CREATE INDEX IF NOT EXISTS idx_sessions_token ON access_sessions (session_token);
CREATE INDEX IF NOT EXISTS idx_sessions_status ON access_sessions (status);

-- 11. Seed an admin session (so YOU can log in first time without needing approval)
-- This creates a pre-approved session. Use token: "admin-seed-session" to log in the first time.
INSERT INTO access_sessions (session_token, requester_name, status, approved_at, expires_at)
VALUES ('admin-seed-session', 'Admin (seed)', 'approved', NOW(), NOW() + INTERVAL '365 days')
ON CONFLICT (session_token) DO NOTHING;
