'use strict'

const PORT = 8080

const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/ping', (req, res) => {
  res.send('pong')
})

app.post('/submit', (req, res) => {
  res.send('OK')
})

app.get("/:lnk([a-zA-Z0-9]{8})", (req, res) => {
  const shortLink = req.params.lnk
  res.send('OK')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))