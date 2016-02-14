import request from 'superagent'

export const getTables = (callback) => {
  request
    .get('http://localhost:3000/tables')
    .end((err, res) => {
      if (err) { console.log('ERROR: getTables failed to get data'); return }
      console.log('ajax.js is trying to return tables')
      callback(res.text)
    })
}
