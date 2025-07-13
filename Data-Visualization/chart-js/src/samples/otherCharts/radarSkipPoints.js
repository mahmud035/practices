import { Chart } from 'chart.js';

(async function () {
  const labels = [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, null, 90, 81, null, 56, 55],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        spanGaps: false,
      },
      {
        label: 'Dataset 2',
        data: [null, 60, 70, null, 75, 85, 90],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        spanGaps: false,
      },
      {
        label: 'Dataset 3',
        data: [80, 50, null, 60, 40, null, 70],
        fill: true,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgb(255, 206, 86)',
        pointBackgroundColor: 'rgb(255, 206, 86)',
        spanGaps: false,
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
          text: 'Chart.js - Radar Chart with Skip Points',
        },
      },
    },
  };

  new Chart(document.getElementById('radarSkipChart'), config);
})();
