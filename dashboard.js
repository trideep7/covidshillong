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
	      '10-May',
	      '11-May',
              '12-May',
	      '13-May',
	      '14-May',
	      '15-May',
	      '16-May'
      ],
      datasets: [{
	label: 'Per Day Cases',
        data: [
		409,
		450,
                406,
		591,
		627,
		560,
		569
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
	    	5,
	    	9,
            	8,
		18,
		12,
		21,
		19
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
	    	241,
	    	206,
            	314,
		228,
		327,
		215,
		354
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
