'use strict'

import $ from 'jquery'
import getElement from './getElement'
import movePlayer from './movePlayer'
import updateCell from './updateCell'
import returnCellByDiv from './returnCellByDiv'
import updateElementData from './updateElementData'
import returnDatabaseObject from './returnDatabaseObject'

export default function (player, destination) {
  let oldCell = utils.returnCellByDiv(player)
  moveElement($(player), $(destination))
  updateElementData(player, returnDatabaseObject('players', $(player).attr('id')))
  updateCell(returnCellByDiv(player))
  updateCell(oldCell)
}
