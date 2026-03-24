// File Path: ./server.js

const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
// Render automatically provides a PORT environment variable
const port = process.env.PORT || 3000; 

// Initialize Supabase securely
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Middleware
app.use(cors()); // Allows your frontend to connect safely
app.use(express.json()); // Allows your backend to read JSON data

// Secure Database Route
// The frontend calls this endpoint, and the backend securely fetches data from Supabase
app.get('/api/data', async (req, res) => {
  // NOTE: Replace 'your_table_name' with an actual table in your Supabase project
  const { data, error } = await supabase.from('your_table_name').select('*').limit(5);

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  // Send the secure data back to the frontend
  res.json(data); 
});

// Simple health check route to verify Render is working
app.get('/', (req, res) => {
  res.send('Backend is running securely on Render and connected to Supabase!');
});

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
