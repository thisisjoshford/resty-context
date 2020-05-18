import React from 'react';
import style from './Response.css';

const Response = ({ response }) => (
  <section className={style.Box}>
    <pre>
      {JSON.stringify(response, null, 2)}
    </pre>
  </section>
);

export default Response;
