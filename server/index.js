'use strict'

var express = require('express')
var app = express()
var cors = require('cors')
var path = require('path')
var fs = require('fs')

app.use(cors({
  origin: 'http://localhost:9966'
}))

app.get('/tables', function (req, res) {
  fs.readFile(path.join(__dirname, '../data/tables.json'), 'utf8', function (err, data) {
    if (err) { console.log('ERROR: failed to read file at path /data/tables.json'); return }
    var tables = JSON.parse(data).tables
    res.json(tables)
  })
})

app.get('/', function (req, res) {
  res.send('welcome to test')
})

app.listen(3000, function () {
  console.log('Nest listening on port 3000!')
})
