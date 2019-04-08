'use strict'

const PORT = 8080

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const randomIdGenerator = () => {
  var text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

const inMemoryDb = {}

const addRecord = (url) => {
  var randomId = randomIdGenerator()
  while (typeof inMemoryDb[randomId] !== 'undefined'){
    randomId = randomIdGenerator()
  }
  inMemoryDb[randomId] = { url }
  return randomId
}

const getRecord = (shortLink) => {
  return typeof inMemoryDb[shortLink] === 'undefined' ? null : inMemoryDb[shortLink]
}

app.use(bodyParser.json())

app.get('/ping', (req, res, next) => {
  res.send('pong')
})

app.post('/submit', (req, res, next) => {
  const requestObj = req.body
  const responseObj = {
    url: requestObj.url,
    shorten_url: `http://localhost:8080/${addRecord(requestObj.url)}`
  }
  res.send(responseObj)
})

app.get("/:lnk([a-zA-Z0-9]{8})", (req, res, next) => {
  const shortLink = req.params.lnk
  const urlObject = getRecord(shortLink)
  console.log(urlObject)
  if (urlObject) {
    res.redirect(301, urlObject.url)
  } else {
    next()
  }
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))