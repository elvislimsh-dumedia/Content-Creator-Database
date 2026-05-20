-- ============================================
-- DU Creatives - Supabase Storage Setup
-- Run this in Supabase SQL Editor
-- ============================================

-- 1. Create the storage bucket for creator files
INSERT INTO storage.buckets (id, name, public)
VALUES ('creator-files', 'creator-files', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Allow public read access (files are served via public URL)
CREATE POLICY "Public read access"
ON storage.objects FOR SELECT
TO anon
USING (bucket_id = 'creator-files');

-- 3. Allow anon to upload files
CREATE POLICY "Anon can upload files"
ON storage.objects FOR INSERT
TO anon
WITH CHECK (bucket_id = 'creator-files');

-- 4. Allow anon to update files (overwrite)
CREATE POLICY "Anon can update files"
ON storage.objects FOR UPDATE
TO anon
USING (bucket_id = 'creator-files');

-- 5. Allow anon to delete files
CREATE POLICY "Anon can delete files"
ON storage.objects FOR DELETE
TO anon
USING (bucket_id = 'creator-files');
