import { createClient } from '@supabase/supabase-js';

// Thay thế URL và ANON_KEY lấy từ mục Project Settings > API trên Supabase của bạn
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseKey = 'your-anon-key-here';

export const supabase = createClient(supabaseUrl, supabaseKey);
