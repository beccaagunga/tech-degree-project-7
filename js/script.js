// VARIABLES //
const lineChart = document.getElementsByClassName('lineChartBox');
const barChart = document.getElementsByClassName('barChartBox');
const doughnutChart = document.getElementsByClassName('doughnutChartBox');

// TRAFFIC CHART //
let lineTrafficChart = new Chart(lineChart, {
  type: 'line',
  data: {
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets: [
      {
        label: 'Visitors',
        data: [250, 800, 750, 1000, 1250, 950, 500, 1150, 2100, 2250, 2300],
        backgroundColor: 'rgba(115, 119, 191, 0.25)',
        borderColor: '#7477bf',
        borderWidth: 1.5,
        pointBorderWidth: 1.8,
        pointRadius: 5,
        pointBackgroundColor: '#fff',
        pointHoverBackgroundColor: '#e7e8f9',
        lineTension: 0,
      }
    ]
  },
});


// BAR CHART //
let barTrafficChart = new Chart(barChart, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        label: 'Volume',
        data: [50, 75, 150, 200, 350, 200, 350],
        backgroundColor: [
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)'
            ],
            borderColor: [
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)',
                'rgb(75, 75, 113)'
            ],
            borderWidth: 1
      }
    ]
  },
  options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                  }
                }
              ]
            }
          }
});


// DONUT CHART //

let doughnutUsersChart = new Chart(doughnutChart, {
  type: 'doughnut',
  data: {
    labels: ['Phones', 'Tablets', 'Desktop'],
    datasets: [
      {
        data: [15, 20, 60],
        backgroundColor: ['#74b1bf', '#81c98f', '#7377bf'],
        hoverBackgroundColor: ['#56aabd', '#67c97a', '#6368c0'],
      }
    ]
    },
    options: {
        legend: {
            display: true,
            position: 'right'
        },
    }
    });


Chart.defaults.global.responsive = true;
