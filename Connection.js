// stil in progress

// use fetch to make a request to the server
// and return the response as a promise

fetch('http://localhost:3000/api/v1/connections', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    connection: {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
  })
})
.then(res => res.json())
.then(json => console.log(json))
