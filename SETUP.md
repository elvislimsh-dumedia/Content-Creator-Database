# DU Creatives — Setup Guide

## 1. Supabase Setup

### Create Project
1. Go to https://supabase.com and sign up (free tier)
2. Click "New Project", name it `du-creatives`
3. Choose your region (Singapore recommended)
4. Wait for project to be ready (~2 min)

### Get API Keys
1. Go to **Settings > API**
2. Copy the **Project URL** (e.g. `https://xxxxx.supabase.co`)
3. Copy the **anon public** key (the long `eyJ...` string)

### Create Database Tables
1. Go to **SQL Editor** in the Supabase dashboard
2. Click **New Query**
3. Copy the contents of `supabase-schema.sql` and paste it
4. Click **Run**

This creates:
- `app_config` — stores the shared password securely (not in frontend)
- `access_sessions` — tracks login requests and approvals
- `influencers` — creator database
- `backup_log` — backup history
- RPC functions for password verification and session checking
- A pre-approved admin session (token: `admin-seed-session`)

### Enable Realtime
1. Go to **Database > Replication**
2. Make sure `access_sessions` is listed (the SQL script adds it automatically)

### Update Config
1. Open `supabase-config.js`
2. Replace `PASTE_YOUR_ANON_KEY_HERE` with your actual anon key
3. Verify the URL matches your project

## 2. First Login

After running the schema:
1. Open your browser's console (F12) on the login page
2. Run: `localStorage.setItem('duc_session', 'admin-seed-session')`
3. Refresh — you're now logged in as admin
4. Or: enter the password on login page, then approve your own request from another already-logged-in session

## 3. How Auth Works

**Login Flow:**
1. User enters password ("dumedia1106") and their name
2. Password is verified via Supabase RPC function (never exposed to frontend)
3. If correct, a "pending" access request is created
4. User sees "Waiting for admin approval..." spinner
5. Admin sees a notification bell with the pending request count
6. Admin clicks Approve or Reject
7. User's login page auto-detects approval (via Realtime + polling) and enters the app

**To change the password:**
Go to Supabase SQL Editor and run:
```sql
UPDATE app_config SET value = 'your-new-password' WHERE key = 'access_password';
```

## 4. Vercel Deployment

### Install Vercel CLI
```bash
npm i -g vercel
```

### Deploy
```bash
cd "Influencer Deck"
vercel
```

Follow the prompts:
- Framework: **Other**
- Build command: (leave empty)
- Output directory: `.`

### Update Supabase Settings
After deploying, go to **Supabase > Authentication > URL Configuration**:
- Set **Site URL** to your Vercel URL (e.g. `https://du-creatives.vercel.app`)

## 5. Backup & Restore

The **Backup** tab in the app provides:
- **Export JSON** — full backup with all data
- **Export CSV** — spreadsheet format
- **Import/Restore** — upload a previous JSON backup
- **Download for Drive** — save to your Google Drive folder manually
- **Last Backup Date** — tracked automatically

## 6. Files Overview

| File | Purpose |
|------|---------|
| `index.html` | Main app (requires valid session) |
| `login.html` | Password login + approval flow |
| `app.js` | App logic with Supabase API |
| `supabase-config.js` | Supabase URL + anon key |
| `styles.css` | All styles |
| `vercel.json` | Vercel routing config |
| `supabase-schema.sql` | Database schema (run once) |
| `logo.png` | DU Creatives logo |
