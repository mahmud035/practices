import { Chart } from 'chart.js';

(async function () {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 8, // Larger point size
        pointHoverBackgroundColor: 'rgba(255, 159, 64, 1)', // Hover color
        pointHoverBorderColor: '#fff',
        pointHoverRadius: 10, // Bigger on hover
        tension: 0.4, // Smooth line
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
          text: 'Chart.js Line Chart - Point Styling',
        },
      },
    },
  };

  new Chart(document.getElementById('pointStylingLineChart'), config);
})();
