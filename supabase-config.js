// Supabase Configuration
// These are PUBLIC keys — safe to include in frontend code.
// Security is enforced by Row Level Security (RLS) policies in Supabase.

const SUPABASE_URL = 'https://shzkzmixyznthjoetcpm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoemt6bWl4eXpudGhqb2V0Y3BtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxMzExMTksImV4cCI6MjA5NDcwNzExOX0.qypANb6MXO0f8Y6M0pi0ntjIuKM63QoGMTIDlb_mt-Q';

// Initialize Supabase client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
