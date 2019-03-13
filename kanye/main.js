var socket = new WebSocket(`ws://${window.location.hostname}:8080`)

let kanye_ids = []

socket.addEventListener('message', (message) => {
  let pos = JSON.parse(message.data)

  // If the Kanye ID isn't in the array, add it and make a new Kanye image
  if (!kanye_ids.includes(pos.kanye_id)) {
    kanye_ids.push(pos.kanye_id)
    let newKanyeImage = document.createElement('img')
    newKanyeImage.src = pos.kanye_head
    newKanyeImage.id = "kanye_" + pos.kanye_id
    newKanyeImage.className = "kanye"

    document.querySelector('body').appendChild(newKanyeImage)
  }


  console.log('new position', pos)

  document.querySelector(`#kanye_${pos.kanye_id}`).style.left = `${pos.x}px`
  document.querySelector(`#kanye_${pos.kanye_id}`).style.top = `${pos.y}px`
})

document.querySelector('body').addEventListener('mousemove', (event) => {
  console.log('event', event.clientX, event.clientY)

  let pos = {
    x: event.clientX,
    y: event.clientY
  }

  let stringPos = JSON.stringify(pos)

  socket.send(stringPos)
})
