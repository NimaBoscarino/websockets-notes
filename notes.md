[Git repo with code](https://github.com/NimaBoscarino/websockets-notes)

Goal: Implement real-time communication between multiple clients and a server, IN A BROWSER. (e.g. google docs, slack, etc.)

1st half of the lecture, you've never heard the word websockets before

Google docs:
- HTML + CSS
  - SCSS
- Database
- Javascript
  - Routing in Express
    - /docs/12, /docs/45
  - Implies a server (e.g. Express)
- Sessions to keep track of who's logged in
- User authentication

- Google docs autosaves
- A BUNCH OF DIFFERENT PEOPLE CAN WORK TOGETHER
  - Protocols for communication
  - HTTP
    - hyper text transfer protocol
    - Each time the google doc changes, we have a request to the server
      - e.g. on every keystroke
      - on some sort of set time, we could make an AJAX request to fetch data from the server
        - time interval

Problem:

- Since we're in the browser, the protocol we use is HTTP
- HTTP has two main issues
  - server cannot initiate a request to the client (cannot push data to the client easily)
  - HTTP is not persistent by nature. Requests are transactional.
    - Client opens
    - Request is made
    - Server handles the request, forms and sends a response
    - Client receives the response
    - The client closes the connection

HTTP: it's like talking with someone in another building by throwing paper planes back and forth, where only one person has paper.

Can we accomplish real-time updates w/o a persisten connection?

Yes we can, in two (main) ways using a technique called _polling_.

1) Simple Polling (two different ways to do this)

- constantly send GET requests to the server, asking for changes

- setTimeout
  - waits a certain amount of time to perform an action (provided via a callback)
- setInterval
  - performs an action (provided via a callback) every X milliseconds

Yes it's possible.

Pro: it works
Con:
- it could fail... it takes extra work to keep messages in order.
- there's a little bit of a delay

2) Long Polling - Comet polling

- Client makes an HTTP request, but the server doesn't reply right away. The connection stays open until the server replies. Server will reply when it has new data. (connection ends) The client has to make another connection (another long poll)

Pros:
- fewer requests because we're not polling every x seconds
- much close to real-time
- responses are guaranteed to come back in order

Cons:
- demanding on the server
- error handling? things get hairy. *ERROR FIRST CALLBACKS*

Pros (all of the above): we don't need any new protocols. No new specifications for browsers.

It feels kinda hacky. We want a non-hacky way of doing this.

Name of the lecture... socks on the web AKA WEBSOCKETS.

2nd half... who knows?

Websockets... 4 things YOU can do real-time communicate. Browser HATE him!

New protocol

http://www.google.com

YOUR URLS WILL LOOK SLIGHTLY DIFFERENT

ws://hskdjfdhsf.com

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