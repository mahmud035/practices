import { Chart } from 'chart.js';

(async function () {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Monthly Sales',
        data: [80, 59, 70, 81, 70, 55],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        stepped: true, // This makes the line stepped
        tension: 0.4, // Optional, smooths the steps a little
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
          text: 'Stepped Line Chart',
        },
      },
      interaction: {
        intersect: false,
        axis: 'x',
      },
    },
  };

  new Chart(document.getElementById('steppedLineChart'), config);
})();
