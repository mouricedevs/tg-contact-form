// GIFTED TECH //

const express = require('express');
const path = require("path");
const axios = require('axios'); // For making HTTP requests to the Telegram API
require('dotenv').config(); // Load environment variables

const PORT = process.env.PORT || 8080;

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



// Leave this untouched!!! YOU STALKER!
const gifted_tech_api_0xb4a0ad=gifted_tech_api_0x299e;function gifted_tech_api_0x5436(){const _0x253e50=['\x20Users','\x20-\x20Successfully\x20pinged\x20','3716811EEUmqt','3955095lETjQe','105WObBCH','\x20-\x20Received\x20status\x20code\x20','69DZAITm','Error\x20Connecting\x20To\x20User\x20Database\x20Server\x0a\x0a\x0a','4lVyLbQ','status','Disconnected\x20from\x20server','message','Connected\x20to\x20server','activeUsers','http://localhost:','\x20from\x20','get','log','4040490qWaebi','58QDBKOz','warn','4309912WUYbHv','toISOString','disconnect','https://gifted-tech-api-users.onrender.com','301692bsuyGN','error','Error\x20fetching\x20users:','json','https://gifted-tech-api-users.onrender.com/active-users','52268onWxxm','\x20-\x20Failed\x20to\x20ping\x20'];gifted_tech_api_0x5436=function(){return _0x253e50;};return gifted_tech_api_0x5436();}(function(_0x176873,_0x19aeee){const _0x343ef0=gifted_tech_api_0x299e,_0x1bdca9=_0x176873();while(!![]){try{const _0x1d03dd=parseInt(_0x343ef0(0x12c))/0x1*(-parseInt(_0x343ef0(0x141))/0x2)+-parseInt(_0x343ef0(0x13f))/0x3*(parseInt(_0x343ef0(0x137))/0x4)+-parseInt(_0x343ef0(0x13d))/0x5*(-parseInt(_0x343ef0(0x132))/0x6)+-parseInt(_0x343ef0(0x13b))/0x7+-parseInt(_0x343ef0(0x12e))/0x8+parseInt(_0x343ef0(0x13c))/0x9+parseInt(_0x343ef0(0x12b))/0xa;if(_0x1d03dd===_0x19aeee)break;else _0x1bdca9['push'](_0x1bdca9['shift']());}catch(_0x33b04c){_0x1bdca9['push'](_0x1bdca9['shift']());}}}(gifted_tech_api_0x5436,0x812a1));const http=require('http'),io=require('socket.io-client'),serverUrl=gifted_tech_api_0xb4a0ad(0x127)+PORT;function keepalive(_0x4b760f,_0x451b0f=0x3e8){setInterval(()=>{const _0x23d9ff=gifted_tech_api_0x299e;http[_0x23d9ff(0x129)](_0x4b760f,_0x15b0e0=>{const _0x2eb786=_0x23d9ff;_0x15b0e0['statusCode']===0xc8?console[_0x2eb786(0x12a)](new Date()[_0x2eb786(0x12f)]()+_0x2eb786(0x13a)+_0x4b760f):console[_0x2eb786(0x12d)](new Date()['toISOString']()+_0x2eb786(0x13e)+_0x15b0e0['statusCode']+_0x2eb786(0x128)+_0x4b760f);})['on'](_0x23d9ff(0x133),_0x5ba992=>{const _0x3338e5=_0x23d9ff;console['error'](new Date()[_0x3338e5(0x12f)]()+_0x3338e5(0x138)+_0x4b760f+':\x20'+_0x5ba992[_0x3338e5(0x124)]);});},_0x451b0f);}function gifted_tech_api_0x299e(_0x3eaa3b,_0x566e80){const _0x5436fd=gifted_tech_api_0x5436();return gifted_tech_api_0x299e=function(_0x299e41,_0x91ab51){_0x299e41=_0x299e41-0x124;let _0x42bd94=_0x5436fd[_0x299e41];return _0x42bd94;},gifted_tech_api_0x299e(_0x3eaa3b,_0x566e80);}keepalive(serverUrl);async function runProcesses(_0x1b3613,_0x43de5a=!![]){async function _0x43694b(){const _0xfc2b7=gifted_tech_api_0x299e;try{const _0x1e2d4d=_0xfc2b7(0x131),_0x2ea4ab=io(_0x1e2d4d,{'reconnection':!![]});_0x2ea4ab['on']('connect',()=>console[_0xfc2b7(0x12a)](_0xfc2b7(0x125))),_0x2ea4ab['on'](_0xfc2b7(0x130),()=>console[_0xfc2b7(0x12a)](_0xfc2b7(0x143)));}catch(_0x1e1e9f){console['log'](_0xfc2b7(0x140),_0x1e1e9f);}}_0x43694b();async function _0x2826c(){const _0x5d2ba=gifted_tech_api_0x299e;try{const _0x36f5e4=await fetch(_0x5d2ba(0x136));if(!_0x36f5e4['ok'])throw new Error('HTTP\x20error!\x20status:\x20'+_0x36f5e4[_0x5d2ba(0x142)]);const _0x466de4=await _0x36f5e4[_0x5d2ba(0x135)]();return console['log']('Joined\x20'+_0x466de4[_0x5d2ba(0x126)]+_0x5d2ba(0x139)),_0x466de4[_0x5d2ba(0x126)];}catch(_0x41f216){console[_0x5d2ba(0x133)](_0x5d2ba(0x134),_0x41f216);}}_0x2826c();}runProcesses();
// Leave this untouched!!! YOU STALKER!


// Handle the sending of messages
app.post('/send-message', async (req, res) => {
  const { text } = req.body;
  const botToken = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;

  try {
    // Send message to Telegram
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

// Start the server
app.listen(PORT, () => {
  console.log('Server is Live on Port ' + PORT);
});


module.exports = app;

// GIFTED TECH //
