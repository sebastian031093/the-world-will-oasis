import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qripvkbgiltmeliprate.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyaXB2a2JnaWx0bWVsaXByYXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNjQxNDgsImV4cCI6MjA2MTk0MDE0OH0.97ViOJ0JiNWgj5gK4ewYl7zdp8jyzUNc0lkZDT9moOE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
