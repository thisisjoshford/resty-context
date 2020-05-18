import React from 'react';
import PropTypes from 'prop-types';
import style from './Response.css';

const Response = ({ response }) => (
  <section className={style.Box}>
    <pre>
      {JSON.stringify(response, null, 2)}
    </pre>
  </section>
);

Response.propTypes = {
  response: PropTypes.object.isRequired
};

export default Response;


