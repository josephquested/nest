'use strict'

import utils from '../lib'
import $ from 'jquery'

export default function (playerData) {
  const player = document.createElement('div')
  player.id = playerData.id
  utils.appendElement(player, 'spawn')
  utils.updateElementData(playerData.id, playerData)
}
