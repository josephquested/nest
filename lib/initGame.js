import utils from '../lib'

let playerData = {
  'id': 'p_0',
  'name': 'JJWQ',
  'health': 'good',
  'inventory': {
    'wood': 0,
    'meat': 4,
    'rock': 10,
    'teeth': 2
  },
  'age': 'five days'
}

export default function () {
  utils.appendElement(utils.generateTableHtml('0_0', 7), 'board')
  utils.generatePlayer(playerData)
}
