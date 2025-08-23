import { Chart } from 'chart.js';

(async function () {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Website Traffic 2024',
        data: [50, 60, 55, 70, 75, 80],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        // tension: 0.4, // Smooth line
        // fill: true,
      },
      {
        label: 'Website Traffic 2025',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        // tension: 0.4,
        // fill: true,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    },
  };

  new Chart(document.getElementById('samplesLineChart'), config);
})();
