// File Path: ./server.js

const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const path = require('path'); // Added to help locate your HTML file

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

// NEW: Tells the server to serve any files inside a folder named 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Secure Database Route
app.get('/api/data', async (req, res) => {
  // NOTE: Replace 'your_table_name' with an actual table in your Supabase project
  const { data, error } = await supabase.from('your_table_name').select('*').limit(5);

  if (error) {
    return res.status(500).json({ error: error.message });
  }
  
  // Send the secure data back to the frontend
  res.json(data); 
});

// Changed from '/' to '/api/health' so it doesn't block your landing page
app.get('/api/health', (req, res) => {
  res.send('Backend API is running securely on Render!');
});

// NEW: Catch-all route. If a user visits your site, send them the index.html page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
