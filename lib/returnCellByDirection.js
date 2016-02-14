import $ from 'jquery'

export default function (currentCell, direction) {
  let destinationCell
  let cellIndex = $(currentCell).index()

  if (direction === 'north') { destinationCell = $(currentCell).closest('tr').prev().children().eq(cellIndex) }
  if (direction === 'east') { destinationCell = $(currentCell).next() }
  if (direction === 'south') { destinationCell = $(currentCell).closest('tr').next().children().eq(cellIndex) }
  if (direction === 'west') { destinationCell = $(currentCell).prev() }

  if (!$(destinationCell).is('td')) { console.log('ERROR: tried to return an OUT OF BOUNDS cell'); return }
  return destinationCell
}
