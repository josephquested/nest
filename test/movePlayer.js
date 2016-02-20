'use strict'

import test from 'tape'
import utils from '../lib'

let table = "tables": {
    "t_0_0": {
      "row_0": {
        "cell_0_0": {
          "data": {
            "players": [],
            "feature": {}
          }
        },
        "cell_0_1": {
          "data": {
            "players": [],
            "feature": {}
          }
        },
let inputData = {'test': 'test'}

test('updateDatabaseObject returns an amended database object', function (t) {
  utils.updateDatabaseObject('tables', inputData, (updatedData) => {
    t.deepEqual(updatedData, expectedData, 'Sucessfully updated table data')
    t.end()
  })
})
