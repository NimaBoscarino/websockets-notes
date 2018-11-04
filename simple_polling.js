function getData (callback) {
  // does cool stuff AND IT'S ASYNC

  // one day
  callback()
}

setInterval(() => {
  getData() // this stuff return not when we expect it to

  // SND OUT REQUEST A
  // SEND OUT REQUEST B
  // SEND OUT C

  // RECEIVE C
  // RECEIVE A
  // RECEIVE B
}, 1000)

function fetchData () {
  setTimeout(() => {
    getData(fetchData)
  }, 1000)
}

fetchData()
