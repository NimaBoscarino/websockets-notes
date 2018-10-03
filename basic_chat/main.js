// create a websocket connection to our server
var socket = new WebSocket("ws://localhost:8080");

// arbitrarily send data, and have it pop up on the server
socket.addEventListener("open", function(evt) {
    socket.send("NEW CONNECTION");
});

socket.addEventListener("message", (message) => {
    console.log("HEY A NEW MESSAGE FROM THE SERVER", message)
})