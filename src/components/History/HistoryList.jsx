import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = () => {
  const historyNodes = history
    .map((item, i) => (
      <li key={i}>
        <HistoryItem {...item} />
      </li>
    ));
  
  return (
    <ul>
      {historyNodes}
    </ul>
  );
};

export default HistoryList;
