import $ from 'jquery'
import utils from '../lib'

export default function () {
  $(document).keyup((e) => {
    let direction
    if (e.which === 38) { direction = 'north' }
    if (e.which === 39) { direction = 'east' }
    if (e.which === 40) { direction = 'south' }
    if (e.which === 37) { direction = 'west' }
    if (direction !== undefined) {
      let player = utils.getElement('p_0')
      let destinationCell = utils.returnCellByDirection(utils.returnCellByDiv(player), direction)
      utils.movePlayer(player, destinationCell)
    }
  })
}
