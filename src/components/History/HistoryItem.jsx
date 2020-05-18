import React from 'react';

const HistoryItem = ({ url, method }) => (
  <section>
    <p>{url}</p>
    <p>{method}</p>
  </section>
);

export default HistoryItem;
