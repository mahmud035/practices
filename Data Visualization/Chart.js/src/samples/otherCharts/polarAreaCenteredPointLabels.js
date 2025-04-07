import { Chart } from 'chart.js';

(async function () {
  const labels = ['Red', 'Green', 'Yellow', 'Grey', 'Blue'];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
        ],
      },
    ],
  };

  const config = {
    type: 'polarArea',
    data: data,
    options: {
      responsive: true,
      scales: {
        r: {
          pointLabels: {
            display: true,
            centerPointLabels: true,
            font: {
              size: 16,
              weight: 'bold',
            },
          },
        },
      },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js - Polar Area Chart With Centered Point Labels',
        },
      },
    },
  };

  new Chart(
    document.getElementById('polarAreaChartCenteredPointLabel'),
    config
  );
})();
