import { Chart } from 'chart.js';

(async function () {
  const labels = ['January', 'February', 'March', 'April', 'May'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Product A',
        data: [10, 20, 30, 40, 50],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Product B',
        data: [15, 25, 10, 20, 30],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Product C',
        data: [5, 10, 15, 10, 20],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
    ],
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Stacked Bar Chart',
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  };

  new Chart(document.getElementById('stackedBarChart'), config);
})();
