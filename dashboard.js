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
        	'4-May',
        	'5-May',
        	'6-May',
	      	'7-May',
	      	'8-May',
	      	'9-May',
	      	'10-May'
      ],
      datasets: [{
	label: 'Per Day Cases',
        data: [
          	339,
          	269,
          	347,
		297,
		375,
		418,
		409
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      },
      {
        label: 'Per Day Deaths',
        data: [
            0,
            6,
            2,
            6,
	    11,
	    18,
	    5
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#ff0500',
        borderWidth: 4,
        pointBackgroundColor: '#ff0500'
      },
	{
        label: 'Per Day Recoveries',
        data: [
            204,
            147,
            129,
            176,
	    152,
	    179,
	    241
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#00ff05',
        borderWidth: 4,
        pointBackgroundColor: '#00ff05'
      }]
    },
    options: {
	    	legend: {
      		display: true,
      		position: 'bottom',
      		labels: {
        		fontColor: "#000080",
      			}
      		},
      		scales: {
        		yAxes: [{
          		ticks: {
            			beginAtZero: false
          			}
        		}]
      		},
    		}
  })
})()
