'use strict'

import test from 'tape'
import utils from '../lib'

let expectedData = 'who knows'
let inputData = {'test': 'test'}

test('updateDatabaseObject returns an amended database object', function (t) {
  utils.updateDatabaseObject('tables', inputData, (updatedData) => {
    t.deepEqual(updatedData, expectedData, 'Sucessfully updated table data')
    t.end()
  })
})
