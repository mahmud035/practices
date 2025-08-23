import { Chart } from 'chart.js';

(async function () {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: true,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.4,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Dataset 3',
        data: [45, 67, 32, 67, 23, 76, 54],
        fill: true,
        borderColor: 'rgba(255, 159, 64, 1)',
        tension: 0.4,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
      },
      {
        label: 'Dataset 4',
        data: [12, 29, 35, 52, 44, 38, 50],
        fill: true,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.4,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js - Line Chart with Stacked Area',
        },
        tooltip: {
          mode: 'index',
        },
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false,
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Month',
          },
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: 'Value',
          },
        },
      },
    },
  };

  new Chart(document.getElementById('lineStackedChart'), config);
})();
