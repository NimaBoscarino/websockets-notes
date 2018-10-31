const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8080 }); // ws://localhost:8080
 
const clients = []

console.log('Listening on port 8080')

wss.on('connection', function (ws) {

    clients.push(ws)
    
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN && client != ws) {
                client.send(message);
            }
        });
    });
    
    //ws.send('Welcome!');
});
