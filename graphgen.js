import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

// Register necessary components with Chart.js
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale);

function ProbabilityChart({ data }) {
  // Prepare the data for the chart
  const chartData = {
    labels: data.map(d => new Date(d.timestamp).toLocaleString()), // Format the timestamp for the x-axis
    datasets: [
      {
        label: 'Probability',
        data: data.map(d => d.probability),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  // Options for the chart
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Probability over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Timestamp',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Probability',
        },
        min: 0,
        max: 1, // Since probability is usually between 0 and 1
      },
    },
  };

  return <div className="graph"><Line data={chartData} options={chartOptions} /></div>;
}

export default ProbabilityChart;
