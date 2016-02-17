import request from 'superagent'

const getData = (dataPath, callBack) => {
  request
    .get('http://localhost:3000/data/' + dataPath)
    .end((err, res) => {
      if (err) { console.log('ERROR: getData failed to GET ', dataPath); return }
      callBack(JSON.parse(res.text))
    })
}

const postData = (dataPath, data, callBack) => {
  request
    .post('http://localhost:3000/data/' + dataPath)
    .send(data)
    .end((err, res) => {
      if (err) { console.log('ERROR: postTable failed to POST', data); return }
      callBack(res)
    })
}

export default {
  'getData': getData,
  'postData': postData
}
