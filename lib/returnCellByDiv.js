import $ from 'jquery'
import utils from '../lib'

export default function (div) {
  if (!$(div).is('div')) { console.log('ERROR: trying to FIND CELL WITH INVALID DIV'); return }
  return $(div).closest('td')
} 