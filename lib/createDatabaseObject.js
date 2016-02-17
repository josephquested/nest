'use strict'

import ajax from './ajax.js'

export default function (database, object) {
  // ajax.postTable((res) => console.log(JSON.parse(res.text)))
  ajax.getData('tables', log)
  ajax.getData('players', log)
}

const log = (data) => {
  console.log(data)
}
