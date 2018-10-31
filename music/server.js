const WebSocket = require('ws');
const clients = [];

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  clients.push(ws);

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN & client !== ws) {
            client.send(message);
        }
    });
  });
});