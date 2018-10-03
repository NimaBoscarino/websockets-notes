[Git repo with code](https://github.com/NimaBoscarino/websockets-notes)

- Note: running `node server` from the root folder will give you the youtube API demo (client side stuff is in `public`). For the Kanye head demo look into `kanye`. For the basic back-and-forth example look into `basic_chat`.

The lecture was recorded in two parts!

- [Part 1](https://www.youtube.com/watch?v=klrlvB8--ak)
- [Part 2](https://www.youtube.com/watch?v=IRlyj6VlqGw)


## Brainstorming

Some random words about sockets:
- plug in together
- server and a client
- pass information from one client to another place
- bidirection (FULL DUPLEX)
- not RESTful
- real time
- right in the web browser

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

1) open connection
2) send message
3) receive message
4) close connection



