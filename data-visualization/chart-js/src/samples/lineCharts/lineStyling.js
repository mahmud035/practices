import { Chart } from 'chart.js';

(async function () {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: '2024 Sales',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color (if filled)
        pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
        pointBorderColor: 'white', // Point border color
        pointBorderWidth: 2, // Point border width
        pointRadius: 6, // Point size
        borderDash: [5, 5],
        tension: 0.4, // Smoothness of the line
        fill: false,
      },
      {
        label: '2025 Sales',
        data: [50, 70, 60, 85, 65, 60],
        borderColor: 'rgba(255, 99, 132, 1)', // Line color
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Background color (if filled)
        pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Point color
        pointBorderColor: 'white', // Point border color
        pointBorderWidth: 2, // Point border width
        pointRadius: 6, // Point size
        tension: 0.4, // Smoothness of the line
        fill: true,
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
          text: 'Line Chart with Custom Point Styles',
        },
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Month',
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value',
          },
        },
      },
    },
  };

  new Chart(document.getElementById('stylingLineChart'), config);
})();
