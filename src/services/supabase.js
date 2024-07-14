import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pqcnchibqjunkqjidsgl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxY25jaGlicWp1bmtxamlkc2dsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwMTg4MzgsImV4cCI6MjAzNTU5NDgzOH0.rTQh9Npjut0aChikTPkDzWMLZm4t9SFn4B5ZURnqymc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
