'use strict'

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
        getResult()
        break
      case 'operator':
        operation.push(prevOperation[0])
        prevOperation.length = 0
        calc(current)
        break
      case 'number':
      default:
        calc(current)
        if (prevOperation.length != 0) {
          prevOperation.length = 0
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

function calc(num) {
  operation.push(num)
  $('output').html(operation.join(''))
}

function getResult() {
  $('output').html(eval(operation.join('')))
  prevOperation.push(eval(operation.join('')))
  operation.length = 0
}
