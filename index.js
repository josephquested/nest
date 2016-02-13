import { listen } from './client/display'
import $ from 'jquery'
import utils from './lib'

$(() => {
  utils.initGame()
  listen()
})
