# <REDACTED> W6D3

Goal:

- Implement real-time communication between multiple clients and a server in a browser

(Google docs, chatting, etc.)

YOU HAVE EVERYTHING YOU NEED TO DO THIS.

- self doubt + agony
  - learning how to deal with it. resilience
- SASS
- React
- HTTP <----- very useful
- Javascript <---- very useful
- recursive stuff
- Jquery  <---- pretty useful as well
- Mongo
- SQL
- Postgres
- AJAX <---- very useful
- Always bring a coat
- CSS
- HTML  <---- very useful
- Object oriented stuff
- GIT


Making google docs

- start with a wireframe
- ERD, to figure out what data we have
  - Users
  - Documents
- User stories
  - Sign on to google docs
  - See a document
  - Make an edit
  - Autosave
  - I see edits happen.

I need to be listening for those changes.

HTTP - sends a request, receives a response
- continue asking for changes.
  - are there new changes????

- AJAX
  - $.post()

## Problem:

- Since we are in the browser, we have to use HTTP for communication.
- Two main issues with HTTP:
  - 1. Server cannot initiate a request to the client. Aka the server cannot push data to the client easily.
  - 2. HTTP requests are not persistent by nature. They are transactional.
    - CLIENT OPENS
    - REQUEST
    - RESPONSE
    - CLIENT CLOSES
  
Can we accomplish real-time updates w/o a persistent connection?

Yes, with polling!

## Polling

1. Simple Polling - Constantly send GET requests for new changes
   1. setTimeout - a delay before a thing happens
   2. setInterval - does a thing every x milliseconds

Fun fact! - AR Queue was originally implemented using this.

Pros: It works
Cons: It's horrible. It's also not REALLY real time. It's pseudo real.

2. Long Polling

HTTP request - no worries if you can't reply right now
Eventually the server responds.

Client makes a request but the server doesn't reply right away. Server replies when it has new data. The HTTP transaction is done! So the client has to initiate another long poll.

Pros:

- fewer requests bc not polling every x seconds
- Much closer to real-time
- Responses are guaranteed to come back in order

Cons:

- demanding on the server.
- error handling? How do we do it? - error-first callbacks

OVERALL PRO TO ALL THIS STUFF:

- NO NEED FOR NEW SPECIFICATIONS.

Overall CON: Feels kinda hacky.

non-hacky solution????....

enter WEBSOCKETS

WEBSOCKETS - NEW PROTOCOL

connections to websocket endpoints: 

http://lkajshdliuajhsdlkjashda.com
https://lkjadhflkjasdlfkasf.com

ws://kjsdhlakdjfhdslkf.com
wss://hgsdkfjghsdkjfghsdkf.com

1) open a connection
2) send some data
3) receive some data
4) close a connection

There's a client
And there's a server

