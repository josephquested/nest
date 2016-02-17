'use strict'

import utils from '../lib'
import $ from 'jquery'

export default function (player, destination) {
  let oldCell = utils.returnCellByDiv(player)
  utils.moveElement($(player), $(destination))
  utils.updateElementData(player, utils.returnDatabaseObject('players', $(player).attr('id')))
  utils.updateCell(utils.returnCellByDiv(player))
  utils.updateCell(oldCell)
}
