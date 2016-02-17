const Promise = require('es6-promise').Promise
const fs = require('fs')

module.exports = function (filePath, inputData) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, inputData, 'utf8', (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}
