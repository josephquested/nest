import $ from 'jquery'
import utils from './utils'

$(() => {
  console.log('i exist')
  utils.initGame()
  utils.listen()
})
