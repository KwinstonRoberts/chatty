// server.js
const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('uuid/v1');
// Set the port to 3001
const PORT = 3001
// Create a new express server
const server = express()
// Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({
  server
});

wss.broadcast = function(data){
  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify(data));
  });
};

wss.usersOnline = function(){
  wss.broadcast({
      type: 'usersOnline',
      online: wss.clients.size
    });
}

const messages = [];

const messageObj = {
  type: 'incomingMessage',
  messages: messages
}

//Connection events
wss.on('connection', (ws) => {
    ws.send(JSON.stringify(messageObj));
    wss.usersOnline();
    ws.on('message',(data) => {
      data = JSON.parse(data);
      if(data.type==='message'){
        messages.push({
          id: uuid(),
          username: data.username,
          content: data.content,
          color: data.color
        });
        wss.broadcast(messageObj);
      }else if(data.type==='notification'){
        wss.broadcast({
          type:'incomingNotification',
          content: data.content
        });
      }
    });
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
    ws.on('close', () => {
      wss.usersOnline();
    });
});
