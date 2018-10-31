// setInterval
setInterval(() => {
    doThingWithData(getData())
}, 1000)

// A
// B
// C

// B
// C
// A

function getData(callback) {
    // something async

    callback()
}

// setTimeout
function fetchData() {
    setTimeout(() => { 
        getData(fetchData)
    }, 1000)
}

fetchData()


