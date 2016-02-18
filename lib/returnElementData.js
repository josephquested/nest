import $ from 'jquery'

export default function (element) {
  if (!element) { console.log('Reading data failed on element', element); return }
  return $(element).data('data')
}
