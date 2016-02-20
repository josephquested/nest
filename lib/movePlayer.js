'use strict'

import $ from 'jquery'
import utils from './utils'

export default function (player, destination) {
  utils.moveElement($(player), $(destination))
}
