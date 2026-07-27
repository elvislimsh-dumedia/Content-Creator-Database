-- ============================================================
-- Booking Platform Schema
-- Paste this entire file into: Supabase → SQL Editor → Run
-- ============================================================

-- 1. Passwords
INSERT INTO app_config (key, value) VALUES ('admin_booking_password', 'duc1106')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

INSERT INTO app_config (key, value) VALUES ('sales_password', 'enspire8861')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- 2. Booking sessions
CREATE TABLE IF NOT EXISTS booking_sessions (
    id BIGSERIAL PRIMARY KEY,
    session_token TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL,
    sales_name TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '7 days')
);

-- 3. Bookings
CREATE TABLE IF NOT EXISTS bookings (
    id BIGSERIAL PRIMARY KEY,
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
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. RLS (allow anon access — app handles auth via tokens)
ALTER TABLE booking_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "booking_sessions_all" ON booking_sessions;
DROP POLICY IF EXISTS "bookings_all" ON bookings;

CREATE POLICY "booking_sessions_all" ON booking_sessions FOR ALL TO anon USING (true) WITH CHECK (true);
CREATE POLICY "bookings_all" ON bookings FOR ALL TO anon USING (true) WITH CHECK (true);

-- 5. Login RPC — checks password, creates session token
CREATE OR REPLACE FUNCTION verify_booking_login(pwd TEXT, uname TEXT DEFAULT '')
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    admin_pw TEXT;
    sales_pw TEXT;
    role_val TEXT;
    name_val TEXT;
    token TEXT;
BEGIN
    SELECT value INTO admin_pw FROM app_config WHERE key = 'admin_booking_password';
    SELECT value INTO sales_pw FROM app_config WHERE key = 'sales_password';

    IF pwd = admin_pw THEN
        role_val := 'admin';
        name_val := 'Admin';
    ELSIF pwd = sales_pw THEN
        IF uname = '' OR uname IS NULL THEN
            RETURN json_build_object('error', 'Your name is required');
        END IF;
        role_val := 'sales';
        name_val := uname;
    ELSE
        RETURN json_build_object('error', 'Wrong password');
    END IF;

    token := gen_random_uuid()::TEXT;
    INSERT INTO booking_sessions (session_token, role, sales_name)
    VALUES (token, role_val, name_val);

    RETURN json_build_object('ok', true, 'token', token, 'role', role_val, 'name', name_val);
END;
$$;

-- 6. Session check RPC
CREATE OR REPLACE FUNCTION check_booking_session(tok TEXT)
RETURNS JSON
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    sess booking_sessions%ROWTYPE;
BEGIN
    SELECT * INTO sess FROM booking_sessions
    WHERE session_token = tok AND expires_at > NOW();

    IF NOT FOUND THEN
        RETURN json_build_object('valid', false);
    END IF;

    RETURN json_build_object('valid', true, 'role', sess.role, 'name', sess.sales_name);
END;
$$;
