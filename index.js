import $ from 'jquery'
import utils from './lib'
import display from './client/display'

$(() => {
  utils.initGame()
  utils.listen()
  display()
})
