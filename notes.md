# W 6 D 3: Weebsockets

- React, Vue

Goal: Implement real-time communication between multiple clients and a server IN A BROWSER.

e.g. Google Docs, any chat app

Resume
=======
name
jquery
express
node
sql
mongodb
javascript
html, css
sass
git
React
knex
AJAX
EJS
HTTP


## GOOGLE DOCS

Two people connected to the some document
One person edits, other person immediately sees changes
Both people are able to edit

User accounts
Make edits to a database (AJAX requests to send data to a server) - User 1
ask for data using jquery (AJAX), and write to the DOM - User 2
  - set an interval for AJAX requests

Browser - HTTP

2 main issues:

1) Server cannot initiate a request to the client (server CANNOT push data to the client easily, unprompted)
2) HTTP requests are not persistent by nature, they are transactional
   1) Client opens
   2) Client sends a request
   3) Server response
   4) Client closes the connection

Accomplish real time updates without a persistent connection... with POLLING

SOLUTION 1) Simple Polling

Constantly send GET requests for new changes.

- setInterval
  - do thing every X ms
  - PRO: Barely any pros. Honestly hot garbage.
  - CONS: All of them.
- setTimeout
  - waits for X ms, then does CB thing once
  - PRO: It works! Only one request at a time. Responses are received in order. FAIRLY simple.
  - CONS: Still feels hacky.

SOLUTION 2) Long Polling AKA Comet

Client makes an HTTP request, but the server doesn't respond right away. Server replies when it has new data. (CONNECTION CLOSES)
Client has to make another request (aka initiate another long poll)

PROS: Fewer requests bc not polling every X seconds. Much closer to real-time. Responses are guaranteed to come back in order.

CONS: Still feels hacky.


CONS TOTAL: HOW DO YOU EVEN DO ERROR HANDLING??????

PRO TOTAL: We don't require new specifications.


.... enter WEBSOCKETS

A whole new protocol - established as a standard to be built into browsers.

http://www.google.com
http://localhost:8080
https://www.google.com

ws://www.google.com
wss://www.google.com

THERE ARE 4 THINGS

OPEN

SEND DATA

RECEIVE DATA

CLOSE -- Who cares.