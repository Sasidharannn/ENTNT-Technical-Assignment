import React, { useState } from 'react';

function CommunicationMethods() {
  const [methods, setMethods] = useState([
    { id: 1, name: 'LinkedIn Post', description: 'Post on LinkedIn', mandatory: true },
    { id: 2, name: 'LinkedIn Message', description: 'Send a LinkedIn message', mandatory: true },
    { id: 3, name: 'Email', description: 'Send an email', mandatory: true },
    { id: 4, name: 'Phone Call', description: 'Make a phone call', mandatory: false },
    { id: 5, name: 'Other', description: 'Any other method', mandatory: false },
  ]);

  const addMethod = (method) => {
    setMethods([...methods, { id: methods.length + 1, ...method }]);
  };

  return (
    <div>
      <h1>Communication Methods</h1>
      <ul>
        {methods.map((method) => (
          <li key={method.id}>
            {method.name} - {method.description} {method.mandatory && '(Mandatory)'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommunicationMethods;
