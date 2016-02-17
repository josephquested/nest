'use strict'

let writeFilePromise =  require('./writeFilePromise')
let readFilePromise = require('./readFilePromise')
var express = require('express')
var app = express()
var cors = require('cors')
var path = require('path')
var fs = require('fs')

app.use(cors({
  origin: 'http://localhost:9966'
}))

app.get('/tables', function (req, res) {
  readFilePromise(path.join(__dirname, '../data/tables.json'))
  .then((data) => {
    console.log('data in index.js', data)
    res.send(data)
  .error((err) => {
    console.log('ERROR at /tables:', err)
    })
  })
})

app.get('/players', function (req, res) {
  readFilePromise(path.join(__dirname, '../data/players.json'))
  .then((data) => {
    res.send(data)
  .error((err) => {
    console.log('ERROR at /players:', err)
    })
  })
})

// POST new object to table data

// app.post('/tables', function (req, res) {
//   let filePath = path.join(__dirname, '../data/tables.json')

//   fs.readFile(filePath, 'utf8', function (err, data) {
//     if (err) { console.log('ERROR: failed to read file at path /data/tables.json'); return }
//     var database = JSON.parse(data)
//     database.tables['test'] = 'test'
//     res.database

//     fs.writeFile(filePath, JSON.stringify(database), function (err, data) {
//       if (err) { console.log('ERROR: failed to write file at path /data/tables.json'); return }
//     })
//   })
// })



app.listen(3000, function () {
  console.log('Nest listening on port 3000!')
})
