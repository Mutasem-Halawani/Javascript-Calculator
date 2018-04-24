// 'use strict'

const $ = window.$

// var output = 0
var current = 0
var operation = []
// var previous = 0
// var newEquation = true

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
        break
      case 'operator':
        calc(current)
        break
      case 'number':
      default:
        // if (!newEquation) {
        //   // resetCal()
        //   newEquation = false
        // }
        calc(current)
        console.log(operation);
        break
    }
  })
})

function resetCal() {
  operation.length = 0
  $('output').html(0)
}

function calc(param) {
  operation.push(param)
  $('output').html(operation.join(''))
}
