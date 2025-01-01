import React, { useState } from 'react';

function CompanyManagement() {
  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({
    name: '',
    location: '',
    linkedIn: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    periodicity: '2 weeks',
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCompanies([...companies, { ...form, id: Date.now() }]);
    setForm({
      name: '',
      location: '',
      linkedIn: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      periodicity: '2 weeks',
    });
  };

  return (
    <div>
      <h1>Company Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleInputChange}
          required
        />
        <input
          type="url"
          name="linkedIn"
          placeholder="LinkedIn Profile"
          value={form.linkedIn}
          onChange={handleInputChange}
        />
        <textarea
          name="comments"
          placeholder="Additional Comments"
          value={form.comments}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Add Company</button>
      </form>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyManagement;
