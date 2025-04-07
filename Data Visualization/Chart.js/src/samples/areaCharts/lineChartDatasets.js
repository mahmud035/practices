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
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        tension: 0.1,
      },
      {
        label: 'Dataset 3',
        data: [45, 75, 60, 50, 30, 80, 40],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
      {
        label: 'Dataset 4',
        data: [40, 60, 80, 70, 60, 90, 100],
        fill: false,
        borderColor: 'rgba(54, 162, 235, 1)',
        tension: 0.1,
      },
      {
        label: 'Dataset 5',
        data: [25, 35, 40, 30, 50, 60, 80],
        fill: false,
        borderColor: 'rgba(255, 159, 64, 1)',
        tension: 0.1,
      },
      {
        label: 'Dataset 6',
        data: [85, 55, 45, 60, 70, 30, 50],
        fill: false,
        borderColor: 'rgba(255, 205, 86, 1)',
        tension: 0.1,
      },
      {
        label: 'Dataset 7',
        data: [50, 70, 80, 90, 100, 110, 120],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 0.8)',
        tension: 0.1,
      },
      {
        label: 'Dataset 8',
        data: [40, 60, 70, 50, 30, 20, 10],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 0.8)',
        tension: 0.1,
      },
      {
        label: 'Dataset 9',
        data: [100, 80, 60, 40, 20, 60, 90],
        fill: false,
        borderColor: 'rgba(54, 162, 235, 0.8)',
        tension: 0.1,
      },
      {
        label: 'Dataset 10',
        data: [20, 40, 60, 80, 100, 120, 140],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 0.8)',
        tension: 0.1,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      scales: {
        y: {
          stacked: true,
        },
      },
      plugins: {
        filler: {
          propagate: false,
        },
        title: {
          display: true,
          text: 'Chart.js - Line Chart with Datasets',
        },
        'samples-filler-analyser': {
          target: 'chart-analyser',
        },
      },
      interaction: {
        intersect: false,
      },
    },
  };

  new Chart(document.getElementById('lineDatasetsChart'), config);
})();
