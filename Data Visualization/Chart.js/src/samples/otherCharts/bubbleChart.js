import { Chart } from 'chart.js';

(async function () {
  const data = {
    datasets: [
      {
        label: 'Team A',
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 13, r: 7 },
          { x: 25, y: 30, r: 12 },
          { x: 40, y: 45, r: 10 },
          { x: 50, y: 55, r: 8 },
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Team B',
        data: [
          { x: 20, y: 25, r: 8 },
          { x: 30, y: 15, r: 18 },
          { x: 40, y: 35, r: 10 },
          { x: 60, y: 65, r: 10 },
          { x: 70, y: 75, r: 8 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  const config = {
    type: 'bubble',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js - Bubble Chart',
        },
      },
    },
  };

  new Chart(document.getElementById('samplesBubbleChart'), config);
})();
