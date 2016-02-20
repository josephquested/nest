import $ from 'jquery'
import utils from './utils'

export default function () {
  $(document).keyup((e) => {
    let direction

    if (e.which === 38) { direction = 'north' }
    if (e.which === 39) { direction = 'east' }
    if (e.which === 40) { direction = 'south' }
    if (e.which === 37) { direction = 'west' }
    if (direction !== undefined) {
      let player = $('#p_0')
      utils.processMovement(player, direction)
    }
  })
}
