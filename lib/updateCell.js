'use strict'

import utils from '../lib'
import $ from 'jquery'

let cellData = {
  "players": [],
}

export default function (cell) {
  let children = cell.children()


  for (let i = 0; i < children.length; i++) {
    if ($(children[i]).hasClass('player')) {
      cell.append('<p>' + utils.returnElementData(children[i]).name + '</p>')
    }

  // if (!$(children[i]).hasClass('player')) {
  //   cell.empty()
  // }
  }
}
