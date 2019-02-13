const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 }) // ws://localhost:8080

console.log('Listening on port 8080')

let counter = 0;

wss.on('connection', function (ws) {
  ws.kanye_id = counter
  counter++

  ws.on('message', function incoming (message) {
    let parsedMessage = JSON.parse(message)
    parsedMessage.kanye_id = ws.kanye_id

    console.log('received: %s', message)
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage))
      }
    })
  })
})
