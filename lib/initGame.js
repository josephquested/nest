import $ from 'jquery'
import movePlayer from './movePlayer'
import generateTableHtml from './generateTableHtml'
import getElement from './getElement'
import moveElement from './moveElement'

export default function () {
  // let playerData = utils.returnDatabaseObject('players', 'p_0')
  generateTableHtml('t_0_0', 7)
  moveElement(getElement('t_0_0'), getElement('board'))
  // utils.generatePlayer(playerData)
  // utils.movePlayer(utils.getElement(playerData.id), $('#t_0_0 #cell_3_3'))
}
