const labels = [
  'Defending Frequency',
  'Defending Impact',
  'Possession Retention',
  'Set Plays',
  'Ball Progression',
  'Shot Creation',
];

export const chartData = {
  labels: labels,
  datasets: [
    {
      data: [20, 50, 10, 25, 10, 40],
      backgroundColor: [
        '#14314E',
        '#14314E',
        '#14314E',
        '#EDF2F7',
        '#EDF2F7',
        '#EDF2F7',
      ],
      borderWidth: 2,
      borderColor: '#fff',
    },
  ],
};

export const chartOptions = {
  responsive: true,
  scales: {
    r: {
      pointLabels: {
        display: true,
        centerPointLabels: true,
        font: {
          size: 12,
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
