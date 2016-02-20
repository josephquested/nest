import $ from 'jquery'
import utils from './utils'

export default function () {
  utils.returnDatabaseObject('players', (data) => {
    utils.generatePlayer(data.players.p_0)
    utils.generateTableHtml('t_0_0', 7)
    utils.moveElement(utils.getElement('t_0_0'), utils.getElement('board'))
    utils.moveElement(utils.getElement('p_0'), $('#t_0_0 #cell_3_3'))
    utils.updateElementData($('#p_0'), data.players.p_0)
    utils.updateCell($('#t_0_0 #cell_3_3'))
    })
}
