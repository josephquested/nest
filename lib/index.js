import $ from 'jquery'
import utils from './utils'
import display from '../public/index'

console.log('Root index!')

$(() => {
  console.log('i exist')
  utils.initGame()
  utils.listen()
  display()
})
