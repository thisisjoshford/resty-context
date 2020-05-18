import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ history }) => {
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

HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList;
