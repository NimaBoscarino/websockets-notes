// create a websocket connection to our server
var socket = new WebSocket(`ws://${window.location.hostname}:8080`)
speechSynthesis.getVoices()

// arbitrarily send data, and have it pop up on the server
socket.addEventListener('open', function (evt) {
  // socket.send('NEW CONNECTION')
})

socket.addEventListener('message', (message) => {
  console.log('HEY A NEW MESSAGE FROM THE SERVER', message)
  let utterance = new SpeechSynthesisUtterance(message.data)
  let voices = speechSynthesis.getVoices()
  let victoria = voices.filter(voice => voice.name === 'Victoria')[0]

  let splitMessage = message.data.split(' ')
  if (splitMessage.shift() === '/Victoria') {
    utterance.voice = victoria
    utterance.text = splitMessage
  }

  speechSynthesis.speak(utterance)
})

document.querySelector('#send-button').addEventListener('click', () => {
  let message = document.querySelector('input').value
  socket.send(message)
  document.querySelector('input').value = ''
})
