import { Chart } from 'chart.js';

(async function () {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const data = {
    labels: labels,
    datasets: [
      {
        type: 'bar',
        label: 'Monthly Revenue',
        data: [120, 150, 180, 170, 200, 210],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
      },
      {
        type: 'line',
        label: 'Revenue Trend',
        data: [120, 150, 180, 170, 200, 210],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.3,
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
          text: 'Chart.js - Combined Line/Bar Chart',
        },
      },
    },
  };

  new Chart(document.getElementById('comboChart'), config);
})();
