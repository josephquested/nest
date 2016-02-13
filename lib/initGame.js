import utils from '../lib'
import $ from 'jquery'

export default function () {
  let playerData = utils.returnDatabaseObject('players', 'p_0')
  utils.generateTableHtml('t_0_0', 7)
  utils.moveElement(utils.getElement('t_0_0'), utils.getElement('board'))
  utils.generatePlayer(playerData)
  utils.movePlayer(utils.getElement(playerData.id), $('#t_0_0 #cell_3_3'))
}
