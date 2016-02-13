'use strict'
import utils from '../lib'
import $ from 'jquery'

export default function (tableId, exponent) {
  const data = utils.returnTableData(tableId)
  const table = document.createElement("table");
  table.id = 't_' + tableId

  // generate rows
  for (let i = 0; i < exponent; i++) {
  	const row = table.insertRow(i)
  	row.id = 'row_' + i

  	// generate cells
  	for (let j = 0; j < exponent; j++) {
  		const cell = row.insertCell(j)
  		cell.id = 'cell_' + i + "_" + j
  	}

  }
  return table
}