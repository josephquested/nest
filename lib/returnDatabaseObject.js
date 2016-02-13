import * as tables from '../data/tables.json'
import * as players from '../data/players.json'

export default function (database, id) {
  if (database === 'tables') { return tables[database][id] }
  if (database === 'players') { return players[database][id] }
}
