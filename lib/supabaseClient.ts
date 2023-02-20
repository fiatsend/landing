import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = 'https://dyhggeyvegxqqfxumyhc.supabase.co'
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5aGdnZXl2ZWd4cXFmeHVteWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUyMzk3OTQsImV4cCI6MTk5MDgxNTc5NH0.5dXir1I3aUymbiAS-U2b4oY_FCFWst7Yfi-A5FoSXaE"
export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
)
