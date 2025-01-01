import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [companies, setCompanies] = useState([]);

  return (
    <AppContext.Provider value={{ notifications, setNotifications, companies, setCompanies }}>
      {children}
    </AppContext.Provider>
  );
};
