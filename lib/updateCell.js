'use strict'

import returnElementData from './returnElementData'
import $ from 'jquery'

let cellData = {
  "players": [],
}

export default function (cell) {
  let children = cell.children()
  for (let i = 0; i < children.length; i++) {
    if ($(children[i]).hasClass('player')) {
      cell.append('<p>' + returnElementData(children[i]).name + '</p>')
    } else {
      cell.empty()
      //  this part needs to change when cells contain more than just players
    }
  }
}
