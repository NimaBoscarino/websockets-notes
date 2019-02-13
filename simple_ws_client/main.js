console.log('hello!')

let socket = new WebSocket('ws://localhost:8080')

socket.onopen = function () {
  console.log('OPENED CONNECTION')
  socket.send('HAHAHA HELLO FROM THE CLIENT')
}

socket.onmessage = function (message) {
  let newText = message.data

  document.querySelector('h1').innerHTML = newText
}