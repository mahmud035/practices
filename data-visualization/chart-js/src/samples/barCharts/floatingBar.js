import { Chart } from 'chart.js';

(async function () {
  const labels = ['January', 'February', 'March', 'April', 'May'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Forecast Range',
        data: [
          { x: 'January', y: [10, 20] },
          { x: 'February', y: [15, 25] },
          { x: 'March', y: [12, 18] },
          { x: 'April', y: [8, 16] },
          { x: 'May', y: [10, 22] },
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderRadius: 5,
      },
      {
        label: 'Actual Range',
        data: [
          { x: 'January', y: [12, 18] },
          { x: 'February', y: [14, 22] },
          { x: 'March', y: [10, 20] },
          { x: 'April', y: [7, 15] },
          { x: 'May', y: [9, 19] },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderRadius: 5,
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
          text: 'Chart.js Floating Bar Chart',
        },
      },
    },
  };

  new Chart(document.getElementById('floatingBarChart'), config);
})();
