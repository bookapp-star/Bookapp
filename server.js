const express = require('express');
const cors = require('cors');

const app = express();
// Render automatically provides a PORT environment variable
const port = process.env.PORT || 3000; 

// Middleware
app.use(cors()); // Allows your frontend to connect safely
app.use(express.json()); // Allows your backend to read JSON data

// We will uncomment this once you create the routes folder!
// const dbRoutes = require('./routes/dbRoutes');
// app.use('/api', dbRoutes);

// Simple health check route to verify Render is working
app.get('/', (req, res) => {
  res.send('Backend is running securely on Render!');
});

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
