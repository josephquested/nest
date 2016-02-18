import $ from 'jquery'

export default function (element, data) {
  if (!element || !data) { console.log('Appending ', data, ' to ', element, 'failed!'); return }
  $(element).data('data', data)
}
