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

      utils.returnDatabaseObject('players',  (data) => {
        let player = $('#p_0')
        let oldCell = utils.returnCellByDiv(player)
        let destinationCell = utils.returnCellByDirection(utils.returnCellByDiv(player), direction)
        utils.movePlayer(player, destinationCell)
        utils.updateElementData(player, data.players.p_0)
        utils.updateCell($(destinationCell))
        utils.updateCell($(oldCell))
      })
    }
  })
}
