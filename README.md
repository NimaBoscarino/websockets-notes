[Git repo with code](https://github.com/NimaBoscarino/websockets-notes)

[The recorded lecture on Youtube](https://www.youtube.com/watch?v=s2x77_oaDhY)

## How to Run Demos

There are three demo projects in this repo: `basic_chat`, `kanye`, and `music`. To run these, you need to:

1. `npm install -g local-web-server`
2. `npm i` at the root of this project.
3. Run the command `ws` in the folder of the demo that you want to try out
4. In a separate terminal run `node server.js` in the folder of the demo that you want to try
5. Point a couple browser tabs at the URL that step 3 gave you, and enjoy!

## Goal for today

Implement real-time communication between multiple clients and a server IN A BROWSER
e.g. collaborative tools like Google docs, Trello, slack

## Using our tools so far

- Express, Javascript, AJAX, HTTP stuff, REST

1. Have a server for our clients to talk to
2. Set up our routes through express
    - GET AND POST, PUT on resources
        - a document
3. Multiple people connected -- loading up a view
4. AJAX push new tweets (tweeter), so in our thing, AJAX to push new stuff, GET new things
    - I don't want to manually trigger a GET
    - I don't want to manually trigger a POST or PUT

    We could set an Interval... or set a listener of some sort, for changing something and then POST or PUT

## Problem:

- Since we are in the browser, we have to use HTTP for communication
- There are two main issues with HTTP:

    1) Server cannot initiate a request to the client
    2) HTTP request are not persistent by nature. They are transactional.
    
        - Client opens
        - Request is made
        - Server processes and sends a response
        - Client closes


Solution 1) Simple polling

- Constantly send GET requests for new changes, every second?
    Option 1) setTimeout
    Option 2) setInterval

    - AR queue was implemented

- PRO: Real time!
- CON: this feels horrible, blasting the server with requests
- error handling... how???

Solution 2) LONG polling (aka Comet)

- client start a connection (HTTP) "let me know!"
- server replies on their own time (not right away)
- server replies with new data
- connection finishes, so the client has to start a new one

PROS: fewer requests than simple polling
    - much closer to real time
    - responses are guaranteed to come back in order

Non-hacky solutions....

...the name of the lecture

## WEBSOCKETS

HTTP is a protocol
http://

Websockets is a different one
ws://

With websocket connections, there are 4 basic things that we can do. Our browser (and the server) allows us to listen for these events.


1. Open a websocket connection 

Client side:

```js
let socket = new WebSocket(URL)
socket.onopen = () => {
    // when the socket opens
}
```

Server side:

```js
    wss.on('connection', function (ws) {
    // do thing  
    })  
```


2. Send messages

Client:

```js
socket.send('SOMESTRING')
```

Server side:

```js
someConnection.send('somestring')
```

3. Receive messages

Client:

```js
socket.onmessage = (message) => {
    let data = message.data
    // do stuff
}
```

Server side:

```js
ws.on('message', function (message) {
    // do thing
})
```

4. Close connections

Client:

```js
socket.onclose = () => {
    // thing to do when disconnect
}
```

