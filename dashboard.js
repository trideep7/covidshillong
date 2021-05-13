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
	      '7-May',
	      '8-May',
	      '9-May',
	      '10-May',
	      '11-May',
              '12-May',
	      '13-May'
      ],
      datasets: [{
	label: 'Per Day Cases',
        data: [
		297,
		375,
		418,
		409,
		450,
                406,
		591
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
            	6,
	    	11,
	    	18,
	    	5,
	    	9,
            	8,
		18
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
            	176,
	    	152,
	    	179,
	    	241,
	    	206,
            	314,
		228
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#00ff05',
        borderWidth: 4,
        pointBackgroundColor: '#00ff05'
      }]
    },
    options: {
	    tooltips: {
      		mode: 'index',
      		intersect: false
   		},
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
