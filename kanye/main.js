var socket = new WebSocket(`ws://${window.location.hostname}:8080`);

socket.addEventListener("message", (message) => {

    let pos = JSON.parse(message.data)
    console.log("new position", pos)

    document.querySelector('#kanye').style.left = `${pos.x}px`
    document.querySelector('#kanye').style.top = `${pos.y}px`
    
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
