/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        	'1-May',
        	'2-May',
        	'3-May',
        	'4-May',
        	'5-May',
        	'6-May',
	      	'7-May'
      ],
      datasets: [{
	label: 'Per Day Case',
        data: [
          	262,
          	321,
          	246,
          	339,
          	269,
          	347,
		297
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
