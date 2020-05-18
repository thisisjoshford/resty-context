import React, { createContext, useState, useContext } from 'react';

const RestyContext = createContext();

export const RestyProvider = (children) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [textBody, setTextBody] = useState('');

  return (
    <RestyContext.Provider value ={{ url, method, textBody }}>
      {children}
    </RestyContext.Provider>
  );
};

export const useProvider = () => {
  const context = useContext(RestyContext);
  return context;
};
