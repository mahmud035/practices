import { Chart } from 'chart.js';

(async function () {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: '2024 Revenue',
        data: [30, 45, 28, 50, 40, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: '2025 Revenue',
        data: [35, 40, 32, 55, 45, 65],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Vertical Bar Chart',
        },
      },
    },
  };

  new Chart(document.getElementById('verticalBarChart'), config);
})();
