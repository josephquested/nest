import request from 'superagent'

const getTables = (callback) => {
  request
    .get('http://localhost:3000/tables')
    .end((err, res) => {
      if (err) { console.log('ERROR: getTables failed to get data'); return }
      callback(res.text)
    })
}

const getPlayers = (callback) => {
  request
    .get('http://localhost:3000/players')
    .end((err, res) => {
      if (err) { console.log('ERROR: getPlayers failed to get data'); return }
      callback(res.text)
    })
}

export default { getTables, getPlayers }