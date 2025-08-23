import { Chart } from 'chart.js';

(async function () {
  const labels = ['Product A', 'Product B', 'Product C'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Sales',
        data: [30, 45, 25],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 10,
      },
    ],
  };

  const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js - Pie Chart',
        },
      },
    },
  };

  new Chart(document.getElementById('samplesPieChart'), config);
})();
