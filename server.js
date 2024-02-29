require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: userMessage}],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.CHATGPT_API_KEY}`
      }
    });
    res.json({ message: response.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with ChatGPT API', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});