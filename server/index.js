'use strict'

import express from 'express'
let app = express()

app.get('/', (req, res) => {
  res.send('welcome to nest')
})

app.listen(3000, () => {
  console.log('Test app is listening on port 3000')
})