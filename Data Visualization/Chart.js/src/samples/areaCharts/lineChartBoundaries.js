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
        data: [50, -60, 70, -80, 90, -100, 110],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        tension: 0.4, // Smooths the curve of the line
        fill: true, // Fills the area under the line
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      plugins: {
        filler: {
          propagate: false,
        },
        title: {
          display: true,
          text: 'Chart.js - Line Chart with Boundaries',
        },
      },
      interaction: {
        intersect: false,
      },
    },
  };

  new Chart(document.getElementById('lineBoundariesChart'), config);
})();
