#  Websockets W6D3

Goal: Implement real time communication between multiple clients and a server IN A BROWSER

- collaborative tools Google Docs, Trello, Slack (real time updates)

1) A bit of historical info, and motivation
2) A bit of exploration of websockets

## History

Question: make me Google Docs. Or Slack.

Cohort Resume: Node JS, express, Mongo DB, Knex, jQuery, HTML + CSS, HTTP, REST, AJAX, Javascript

Problem: Since we are in the browser, we have to use HTTP for communication.

2 Main issues with HTTP:
    1) Server cannot initiate a request to the client.
    2) HTTP requests are not persisten by nature. They are transactional. 
        1) Client opens a connection
        2) Client makes request
        3) Server receives, processes, and replies (response)
        4) Client connection closes

Solution 1) Simple Polling
    Constantly send GET requests for new changes
    
    Option 1) setInterval
    Option 2) setTimeout

Solution 2) Long Polling (Comet)
    Make a request, stays open because the server does not reply. 

    When the server has something to reply with, they respond. 

    That closes the connection, so the client needs to make another request (which stays pending).

    Pro: responses come back in order...

Cons for both:
    - errror handling


Biggest PRO: They don't require any new specifications.

"I want a non hacky way to do this" - Literally everyone, all the time

Enter WEBSOCKETS...