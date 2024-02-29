const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy endpoint
app.get('/api/data', async (req, res) => {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const apiResponse = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`
    }
  });
  const jsonData = await apiResponse.json();
  res.json(jsonData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});