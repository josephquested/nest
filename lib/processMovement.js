import $ from 'jquery'
import utils from './utils'

export default function (player, direction) {
  utils.returnDatabaseObject('players',  (data) => {
    // get the cell you were at, and the cell you're going to
    let oldCell = utils.returnCellByDiv(player)
    let destinationCell = utils.returnCellByDirection(utils.returnCellByDiv(player), direction)
    // move the player to the new cell, and refresh their data
    utils.movePlayer(player, destinationCell)
    utils.updateElementData(player, data.players.p_0)
    // update the cell html
    utils.updateCell($(destinationCell))
    utils.updateCell($(oldCell))
  })
}
