import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://hnavnogjgfgcuhaykaxc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuYXZub2dqZ2ZnY3VoYXlrYXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NDMyMTUsImV4cCI6MjAzOTExOTIxNX0.Q6J4eClmIO8sUsjVE3T_VotEQmPaKAdDKdNK-NCICF8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
