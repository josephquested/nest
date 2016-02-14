import returnDatabaseObject from './returnDatabaseObject'
import createDatabaseObject from './createDatabaseObject'
import generateTableHtml from './generateTableHtml'
import initGame from './initGame'
import generatePlayer from './generatePlayer'
import movePlayer from './movePlayer'
import updateElementData from './updateElementData'
import returnElementData from './returnElementData'
import moveElement from './moveElement'
import getElement from './getElement'
import updateCell from './updateCell'
import getMovementInput from './getMovementInput'
import returnCellByDirection from './returnCellByDirection'
import returnCellByDiv from './returnCellByDiv'
import listen from './listen'

export default {
  'initGame': initGame,
  'generateTableHtml': generateTableHtml,
  'generatePlayer': generatePlayer,
  'movePlayer': movePlayer,
  'getElement': getElement,
  'returnDatabaseObject': returnDatabaseObject,
  'createDatabaseObject': createDatabaseObject,
  'updateElementData': updateElementData,
  'returnElementData': returnElementData,
  'moveElement': moveElement,
  'listen': listen,
  'getMovementInput': getMovementInput,
  'returnCellByDirection': returnCellByDirection,
  'returnCellByDiv': returnCellByDiv,
  'updateCell': updateCell
}
