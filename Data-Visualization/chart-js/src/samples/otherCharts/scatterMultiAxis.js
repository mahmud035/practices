const { Chart } = require('chart.js');

(async function () {
  const data = {
    datasets: [
      {
        label: 'Group A',
        data: [
          { x: 10, y: 10 },
          { x: 20, y: 20 },
          { x: 30, y: 25 },
          { x: 40, y: 30 },
        ],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Group B',
        data: [
          { x: 10, y: -5 },
          { x: 20, y: 5 },
          { x: 30, y: 15 },
          { x: 40, y: 25 },
        ],
        backgroundColor: 'rgb(54, 162, 235)',
      },
    ],
  };

  const config = {
    type: 'scatter',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js - Scatter Multi Axis Chart',
        },
      },
      scales: {
        y: {
          type: 'linear',
          position: 'left',
          ticks: {
            color: 'red',
          },
        },
        y2: {
          type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
          position: 'right',
          reverse: true,
          ticks: {
            color: 'blue',
          },
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
    },
  };

  new Chart(document.getElementById('scatterMultiAxisChart'), config);
})();
