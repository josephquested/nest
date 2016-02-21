'use strict'
import utils from './utils'
import $ from 'jquery'

export default function (cell) {
  let children = cell.children()
  for (let i = 0; i < children.length; i++) {
    if ($(children[i]).hasClass('player')) {
      cell.append('<p>' + utils.returnElementData(children[i]).name + '</p>')
      utils.updateElementData($(cell), {
          "data": {
            "players": [utils.returnElementData(children[i]).name],
            "feature": {}
          }
        })

    } else {
      cell.empty()
      utils.updateElementData($(cell), {
          "data": {
            "players": [],
            "feature": {}
          }
        })
      //  this part needs to change when cells contain more than just a player
    }
  }

  let cellData = utils.returnElementData($(cell))
  let row = $(cell).closest('tr')
  let table = $(cell).closest('table')

    utils.returnDatabaseObject("tables", (data) => {
    data.tables[table.attr('id')][row.attr('id')][cell.attr('id')] = cellData
  })
}
