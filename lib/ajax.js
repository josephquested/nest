import request from 'superagent'

const getData = (dataPath, callBack) => {
  request
    .get('http://localhost:3000/' + dataPath)
    .end((err, res) => {
      if (err) { console.log('ERROR: getData failed to get ', dataPath); return }
      callBack(res.text)
    })
}

// const postData = (callback) => {
//   request
//     .post('http://localhost:3000/tables')
//     .end((err, res) => {
//       if (err) { console.log('ERROR: postTable failed to get data'); return }
//       callback(res)
//     })
// }

export default {
  'getData': getData
// 'postData': postData
}
