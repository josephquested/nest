import ajax from './ajax.js'

export default function (database, returnData) {
  console.log('within returnDatabaseObject', database, returnData)
  if (database === 'tables') { ajax.getData('tables', returnData) }
  if (database === 'players') { ajax.getData('players', returnData) }
}
