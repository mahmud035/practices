import { Chart } from 'chart.js';

(async function () {
  const DATA_COUNT = 12;
  const labels = [];

  for (let i = 0; i < DATA_COUNT; i++) {
    labels.push(i.toString());
  }

  const dataPoints = [
    0,
    20,
    20,
    60,
    60,
    120,
    NaN,
    180,
    120,
    125,
    105,
    110,
    170,
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Cubic interpolation (monotone)',
        data: dataPoints,
        borderColor: 'red',
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Cubic interpolation',
        data: dataPoints,
        borderColor: 'blue',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Linear interpolation (default)',
        data: dataPoints,
        borderColor: 'green',
        fill: false,
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
          text: 'Chart.js Line Chart - Cubic interpolation mode',
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'X-axis',
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value',
          },
          suggestedMin: -10,
          suggestedMax: 200,
        },
      },
    },
  };

  new Chart(document.getElementById('interpolationMode'), config);
})();
