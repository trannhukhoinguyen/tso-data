import { createClient } from '@supabase/supabase-js';

// Thay thế URL và ANON_KEY lấy từ mục Project Settings > API trên Supabase của bạn
const supabaseUrl = 'https://gtppjhmtyyoxnsujtngg.supabase.co';
const supabaseKey = 'sb_publishable_JZNOgyKv8u3xibeyFVeDtA_4K3JEQeP';

export const supabase = createClient(supabaseUrl, supabaseKey);
