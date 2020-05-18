import React, { createContext, useState, useContext } from 'react';

const RestyContext = createContext();

export const RestyProvider = (children) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');

  return (
    <RestyContext.Provider value ={{ url, method, body }}>
      {children}
    </RestyContext.Provider>
  );
};

export const useProvider = () => {
  const context = useContext(RestyContext);
  return context;
};
