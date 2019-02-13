const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 });
// ws://localhost:8080
 
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received', message);
  });
 
  ws.send('something else');
  ws.send('heyooooo');
});