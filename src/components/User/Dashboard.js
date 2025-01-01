import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get('/api/companies')
      .then((response) => setCompanies(response.data))
      .catch((error) => console.error('Error fetching companies:', error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last Five Communications</th>
            <th>Next Scheduled Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.lastCommunications.join(', ')}</td>
              <td>{company.nextCommunication}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
