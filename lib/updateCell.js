'use strict'

import utils from './utils'
import $ from 'jquery'

let cellData = {
  "players": [],
}

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
}
