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

  const skipped = (ctx, value) =>
    ctx.p0.skip || ctx.p1.skip ? value : undefined;

  const down = (ctx, value) =>
    ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

  const genericOptions = {
    fill: false,
    interaction: {
      intersect: false,
    },
    radius: 0,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Line Segment Styling',
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [65, 59, NaN, 48, 56, 57, 40],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        // tension: 0.4, // Optional, Smooth line
        segment: {
          borderColor: (ctx) =>
            skipped(ctx, 'rgb(0,0,0,0.2)') || down(ctx, 'rgb(192,75,75)'),
          borderDash: (ctx) => skipped(ctx, [6, 6]),
        },
        spanGaps: true,
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: genericOptions,
  };

  new Chart(document.getElementById('lineChartWithSegments'), config);
})();
