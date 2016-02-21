'use strict'

import ajax from './ajax.js'

export default function (database, object, callback) {
  ajax.postData(database, object, callback)
}
