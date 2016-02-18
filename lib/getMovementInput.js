import $ from 'jquery'
import getElement from './getElement'
import movePlayer from './movePlayer'
import returnCellByDirection from './returnCellByDirection'
import returnCellByDiv from './returnCellByDiv'

export default function () {
  $(document).keyup((e) => {
    let direction
    if (e.which === 38) { direction = 'north' }
    if (e.which === 39) { direction = 'east' }
    if (e.which === 40) { direction = 'south' }
    if (e.which === 37) { direction = 'west' }
    if (direction !== undefined) {
      let player = getElement('p_0')
      let destinationCell = returnCellByDirection(returnCellByDiv(player), direction)
      movePlayer(player, destinationCell)
    }
  })
}
