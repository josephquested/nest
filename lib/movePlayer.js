'use strict'

import utils from '../lib'
import $ from 'jquery'

export default function (player, destination) {
  utils.moveElement($(player), $(destination))
  utils.updateElementData(player, utils.returnDatabaseObject('players', player[0].id))
  utils.updateCell(destination)
}
