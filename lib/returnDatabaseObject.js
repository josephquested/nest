import * as tables from '../data/tables.json'
import * as players from '../data/players.json'

export default function (database, inputId) {
  if (database === 'tables') { return tables[database][inputId] }
  if (database === 'players') { return players[database][inputId] }
}
