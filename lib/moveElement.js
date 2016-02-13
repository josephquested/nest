'use strict'

import utils from '../lib'
import $ from 'jquery'

export default function (element, destination) {
	element.remove()
	destination.append(element)
}
