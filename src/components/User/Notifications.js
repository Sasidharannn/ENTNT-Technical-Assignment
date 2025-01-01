import React from 'react';

function Notifications({ notifications }) {
  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>
            {notification.message} - {notification.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
