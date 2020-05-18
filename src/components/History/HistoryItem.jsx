import React from 'react';
import { useProvider } from '../../hooks/Provider';

const HistoryItem = () => {
  const { url, method } = useProvider();
  <section>
    <p>{url}</p>
    <p>{method}</p>
  </section>;
};

export default HistoryItem;
