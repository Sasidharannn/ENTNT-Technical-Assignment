import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['LinkedIn Post', 'Email', 'Phone Call'],
  datasets: [
    {
      label: 'Frequency',
      data: [12, 19, 3],
      backgroundColor: ['rgba(75, 192, 192, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)'],
      borderWidth: 1,
    },
  ],
};

function EngagementDashboard() {
  return (
    <div>
      <h1>Engagement Dashboard</h1>
      <Bar data={data} />
    </div>
  );
}

export default EngagementDashboard;
