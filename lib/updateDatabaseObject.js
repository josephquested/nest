'use strict'

import ajax from './ajax.js'

export default function (database, object, returnData) {
  ajax.postData(database, object, returnData)
}
