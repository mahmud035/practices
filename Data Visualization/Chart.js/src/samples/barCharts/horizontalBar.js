import { Chart } from 'chart.js';

(async function () {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: '2024 Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderRadius: 10,
      },
      {
        label: '2025 Sales',
        data: [14, 17, 6, 8, 3, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderRadius: 10,
      },
    ],
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      indexAxis: 'y', // 🔁 THIS makes it horizontal
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Chart.js Horizontal Bar Chart',
        },
      },
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
    },
  };

  new Chart(document.getElementById('horizontalBarChart'), config);
})();
