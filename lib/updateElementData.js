'use strict'

import utils from '../lib'
import $ from 'jquery'

export default function (id, data) {
	if (!id || !data) { console.log('Appending ', data, ' to ', id, 'failed!'); return }
  $("#" + id).data("data", data)
}
