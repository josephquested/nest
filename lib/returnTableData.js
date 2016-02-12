import * as data from '../data/table.json'

export default function (tableId) {
  return data.tables[tableId]
}
