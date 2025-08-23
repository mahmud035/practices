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
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Dataset 3',
        data: [40, 60, 50, 70, 60, 50, 80],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'Dataset 4',
        data: [40, 40, 50, 60, 70, 80, 90],
        fill: true,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(153, 102, 255, 1)',
      },
      {
        label: 'Dataset 5',
        data: [20, 30, 40, 50, 60, 70, 80],
        fill: true,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        pointBackgroundColor: 'rgba(255, 159, 64, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 159, 64, 1)',
      },
      {
        label: 'Dataset 6',
        data: [10, 20, 30, 40, 50, 60, 70],
        fill: true,
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        borderColor: 'rgba(255, 205, 86, 1)',
        pointBackgroundColor: 'rgba(255, 205, 86, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 205, 86, 1)',
      },
      {
        label: 'Dataset 7',
        data: [80, 70, 60, 50, 40, 30, 20],
        fill: true,
        backgroundColor: 'rgba(201, 203, 207, 0.2)',
        borderColor: 'rgba(201, 203, 207, 1)',
        pointBackgroundColor: 'rgba(201, 203, 207, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(201, 203, 207, 1)',
      },
    ],
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Chart.js - Radar Chart Stacked',
        },
        filler: {
          propagate: false,
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

  new Chart(document.getElementById('samplesRadarChartStacked'), config);
})();
