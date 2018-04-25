// 'use strict'

const $ = window.$

var current = 0
var operation = []
var prevOperation = []

$(document).ready(function () {
  $('.btn').on('click', function (e) {
    current = e.target.textContent

    let btnClick = $(this).data('type')

    switch (btnClick) {
      case 'clear':
        resetCal()
        break
      case 'equals':
        $('output').html(eval(operation.join('')))
        prevOperation.push(eval(operation.join('')))
        operation.length = 0
        break
      case 'operator':
        operation.push(prevOperation[0])
        operation.push(current)
        prevOperation.length = 0
        $('output').html(operation.join(''))
        break
      case 'number':
      default:
        if (prevOperation.length != 0) {
          operation.push(current)
          $('output').html(operation.join(''))
          prevOperation.length = 0
        } else {
          operation.push(current)
          $('output').html(operation.join(''))
        }
        break
    }
  })
})

function resetCal() {
  operation.length = 0
  prevOperation.length = 0
  $('output').html(0)
}

function calc(param) {
  operation.push(param)
  $('output').html(operation.join(''))
}
