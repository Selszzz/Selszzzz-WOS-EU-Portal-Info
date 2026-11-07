
import { createClient } from
'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://mdjfqowujjvcbgxsnrqg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_LHMSazza8fGfqC64a1-QBg_CuFKRd66';

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
