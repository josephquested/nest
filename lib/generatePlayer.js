'use strict'

import utils from '../lib'
import $ from 'jquery'

export default function (playerData) {
  const player = document.createElement('div')
  console.log('player in generate', player)
  player.id = playerData.id
  $(player).addClass('player')
  $('#' + 'spawn').append(player)
  utils.updateElementData(player, playerData)
}
