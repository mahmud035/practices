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
        data: [20, 30, 45, 60, 70, 85, 100],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        stack: 'combined',
        type: 'bar',
      },
      {
        label: 'Dataset 2',
        data: [100, 90, 80, 70, 60, 50, 40],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        stack: 'combined',
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Chart.js - Stacked Line/Bar Chart',
        },
      },
      scales: {
        y: {
          stacked: true,
        },
      },
    },
  };

  new Chart(document.getElementById('stackedBarLineChart'), config);
})();
