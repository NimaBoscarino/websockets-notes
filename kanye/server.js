const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 }) // ws://localhost:8080

console.log('Listening on port 8080')

let counter = 0;
let kanyeHeads = [
  'https://66.media.tumblr.com/tumblr_m3420oFDbQ1rue873o1_250.png',
  'https://66.media.tumblr.com/tumblr_m3xmvvt5oc1rue873o1_400.png',
  'https://66.media.tumblr.com/tumblr_m5nivuhlY11rue873o1_250.png',
  'https://66.media.tumblr.com/tumblr_m9466vHFTz1rue873o1_400.png',
  'https://66.media.tumblr.com/73bf3d161bbbbdf3f66383586f5fd620/tumblr_mge9nl0A2M1rue873o1_r2_500.png'
]

wss.on('connection', function (ws) {
  // ws is an object representing a "connection"
  ws.kanye_id = counter // add kanye_id to that connection object
  counter++
  ws.uniqueHead = kanyeHeads[counter % 5]

  ws.on('message', function incoming (message) {
    let parsedMessage = JSON.parse(message) // just x and y
    parsedMessage.kanye_id = ws.kanye_id // add the kanye_id to it
    parsedMessage.kanye_head = ws.uniqueHead // add the head to the message

    console.log('received: %s', message)
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        // send out X, Y, and Kanye ID, and head
        client.send(JSON.stringify(parsedMessage)) 
      }
    })
  })
})
