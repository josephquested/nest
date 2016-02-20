'use strict'
import $ from 'jquery'
import utils from './utils'

export default function (tableId, exponent) {
  const table = document.createElement('table')

  utils.returnDatabaseObject('tables', (data) => {
    let tableData = data.tables[tableId]
    table.id = tableId

    // generate rows
    for (let i = 0; i < exponent; i++) {
      const row = table.insertRow(i)
      row.id = 'row_' + i

      // generate cells
      for (let j = 0; j < exponent; j++) {
        const cell = row.insertCell(j)
        cell.id = 'cell_' + i + '_' + j
      }
    }

    $('#spawn').append(table)

    for (let k = 0; k < table.rows.length; k++) {
      let row = table.rows[k]
      for (let l = 0; l < row.children.length; l++) {
        let cell = row.children[l]
        utils.updateElementData($(cell), data.tables[tableId][row.id][cell.id])
      }
    }
  })
}
