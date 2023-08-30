import React from 'react';
import { Line } from 'react-chartjs-2';

const VitalSignChart = ({ data }) => {
  const chartData = {
    labels: data.timestamps,
    datasets: [
      {
        label: 'Heart Rate',
        data: data.heartRate,
        borderColor: 'red',
        fill: false,
      },
      // Add more datasets for other vital signs
    ],
  };

  return (
    <div className="vital-sign-chart">
      <h2>Vital Sign Trends</h2>
      <Line data={chartData} />
    </div>
  );
};

export default VitalSignChart;
