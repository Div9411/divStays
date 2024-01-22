import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kteohcvyjpwbpuvqcqzs.supabase.co";
const supabaseKey ='api_key';    //hiding my original key for security purposes
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
