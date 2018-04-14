// 'use strict'

const $ = window.$

var output = 0
var current = 0
var operation = [0]
var previous = 0

$(document).ready(function () {
  $('.btn').on('click', function (e) {
    if ($(this).data('value') === 'AC') { // Clear Calculator
      operation = [0]
      $('output').html(0)
    } else if ($(this).data('value') === 'CE') {

    } else if ($(this).data('value') === 'equals') { // Calculate
      output = operation.join('')
      operation.length = []
      previous = eval(output)
      operation.push(previous)
      $('output').html(previous)
    } else { // Add to Calculation
      current = $(this).text()
      operation.push(current)
      $('output').html(operation.join(''))
    }
  })
})
