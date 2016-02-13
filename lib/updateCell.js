'use strict'

import utils from '../lib'
import $ from 'jquery'

export default function (cell) {
  if (cell.children().length > 0) {
    let children = cell.children()
    for (let i = 0; i < children.length; i++) {
      var elementData = utils.returnElementData(children[i])
      cell.append('<p>' + elementData.name + '</p>')
    }
  }
}
