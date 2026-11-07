import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = "https://ynftxwrmufbnuyissnmi.supabase.co"; 
const SUPABASE_ANON_KEY = "sb_publishable_yJ-3ZPu2NyxoYvi2u8ku6A_Pt6gjihh"; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);