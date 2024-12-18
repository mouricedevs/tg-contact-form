// GIFTED TECH //

const express = require('express'),
      path = require("path"),
      axios = require('axios'),
      port = process.env.PORT || 8080,
      app = express();
require('dotenv').config(); 
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/send-message', async (req, res) => {
  const { text } = req.body,
        botToken = process.env.BOT_TOKEN,
        chatId = process.env.CHAT_ID;
  try {
    const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: text
    });

    if (response.data.ok) {
      res.json({ ok: true });
    } else {
      res.status(500).json({ ok: false, error: 'Failed to send message.' });
    }
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ ok: false, error: 'An error occurred while sending the message.' });
  }
});

app.listen(port, () => {
  console.log('Server is Live on Port ' + PORT);
});

module.exports = app;

// GIFTED TECH //
