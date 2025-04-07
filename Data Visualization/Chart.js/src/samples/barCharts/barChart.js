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
        label: '2024 Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderRadius: 10,
      },
      {
        label: '2025 Sales',
        data: [45, 72, 60, 90, 32, 66, 75],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderRadius: 10,
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
          text: 'Chart.js Rounded Bar Chart',
        },
      },
    },
  };

  new Chart(document.getElementById('samplesBarChart'), config);
})();
