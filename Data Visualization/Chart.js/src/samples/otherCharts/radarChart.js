import { Chart } from 'chart.js';

(async function () {
  const labels = [
    'Running',
    'Swimming',
    'Eating',
    'Cycling',
    'Sleeping',
    'Designing',
    'Coding',
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: '2024 Activity',
        data: [20, 10, 4, 2, 8, 9, 6],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '2025 Activity',
        data: [15, 20, 6, 9, 4, 3, 10],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
      },
    ],
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js - Radar Chart',
        },
      },
    },
  };

  new Chart(document.getElementById('samplesRadarChart'), config);
})();
