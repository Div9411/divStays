import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kteohcvyjpwbpuvqcqzs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZW9oY3Z5anB3YnB1dnFjcXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMDUxMzYsImV4cCI6MjAxNDU4MTEzNn0.ivhPP0pN-3EzFvkDoiKuh4VeRPQALJUQJGVFG9JZy68";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
