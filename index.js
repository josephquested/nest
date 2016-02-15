import $ from 'jquery'
import utils from './lib'
import display from './public/index'

$(() => {
  utils.initGame()
  utils.listen()
  display()
})
