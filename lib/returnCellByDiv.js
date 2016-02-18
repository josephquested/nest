import $ from 'jquery'

export default function (div) {
  if (!$(div).is('div')) { console.log('ERROR: trying to FIND CELL WITH INVALID DIV'); return }
  return $(div).closest('td')
}
