'use strict'
import $ from 'jquery'

export default function (element, id) {
  $('#' + id).append(element)
}
