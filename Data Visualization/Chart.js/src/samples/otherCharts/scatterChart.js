import { Chart } from 'chart.js';

(async function () {
  const data = {
    datasets: [
      {
        label: 'Group A',
        data: [
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
          { x: 15, y: 10 },
        ],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Group B',
        data: [
          { x: -5, y: -5 },
          { x: 5, y: 20 },
          { x: 12, y: 8 },
          { x: 18, y: 15 },
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
          text: 'Chart.js - Scatter Chart',
        },
      },
    },
  };

  new Chart(document.getElementById('samplesScatterChart'), config);
})();
