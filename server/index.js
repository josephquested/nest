'use strict'

let writeFilePromise =  require('./writeFilePromise')
let readFilePromise = require('./readFilePromise')

var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')
var fs = require('fs')

// --- EXPRESS setup

var app = express()
app.use(cors({ origin: 'http://localhost:9966' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// --- GET data requests --- //

app.get('/data/tables', function (req, res) {
  readFilePromise(path.join(__dirname, '../data/tables.json'))
    .then((data) => {
      res.send(data)
    .error((err) => {
      console.log('ERROR: at GET/tables:', err)
    })
  })
})

app.get('/data/players', function (req, res) {
  readFilePromise(path.join(__dirname, '../data/players.json'))
    .then((data) => {
      res.send(data)
    .error((err) => {
      console.log('ERROR: at GET/players:', err)
    })
  })
})

// --- POST data requests

app.post('/data/tables', function (req, res) {
  var inputData = JSON.stringify(req.body)
  console.log('attempting to POST ', inputData, ' to path /data/tables')
  writeFilePromise(path.join(__dirname, '../data/tables.json'), inputData)
    .then(function () {
      console.log('firing!!')
      res.end('POST/data/tables attempt end')
    .error((err) => {
      console.log('ERROR: at POST/data/tables')
    })
  })
})

app.post('/data/players', function (req, res) {
  var inputData = JSON.stringify(req.body)
  console.log('attempting to POST ', inputData, ' to path /data/players')
  writeFilePromise(path.join(__dirname, '../data/tables.json'), inputData)
    .then(function () {
      console.log('firing!!')
      res.end('POST/data/tables attempt end')
    .error((err) => {
      console.log('ERROR: at POST/data/tables')
    })
  })
})

app.listen(3000, function () {
  console.log('† nest server running on port three thousand †')
})
