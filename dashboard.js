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
	      '14-May',
	      '15-May',
	      '16-May',
	      '17-May',
	      '18-May',
	      '19-May',
	      '20-May',
	      '21-May',
	      '22-May',
	      '23-May'
      ],
      datasets: [{
	label: 'Per Day Cases',
        data: [
		627,
		560,
		569,
		634,
		906,
		872,
		1183,
		828,
		1123,
		803
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
		12,
		21,
		19,
		16,
		19,
		24,
		10,
		25,
		21,
		22
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
		327,
		215,
		354,
		237,
		470,
		411,
		465,
		419,
		509,
		553
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
