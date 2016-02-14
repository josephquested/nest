// import $ from 'jquery'
// import utils from '../lib'
import { getTables } from './ajax.js'

export default function () {
  getTables(printData)
}

const printData = (data) => {
  console.log('printData', data)
}
