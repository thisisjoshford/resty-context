import React from 'react';
import PropTypes from 'prop-types';
import style from './FormStyle.css';

const Form = ({ url, textBody, onChange, onSubmit }) => (
  <div className={style.Form}>
    <form className={style.Form} onSubmit={onSubmit}>
      
      <label>
        <input 
          type="text"
          name="url"
          className={style.Url}
          placeholder='enter target URL... '
          value={url}
          onChange={onChange}
        >
        </input>
      </label>
      
      <div>
        <label className={style.Radio}>
          <input 
            className={style.RadioButton}
            type="radio" 
            name="method" 
            value="GET" 
            onChange={onChange}
          /> GET 
        </label>
        <label className={style.Radio}>
          <input 
            className={style.RadioButton}
            type="radio" 
            name="method" 
            value="POST"
            onChange={onChange}
          /> POST 
        </label>
        <label className={style.Radio}>
          <input 
            className={style.RadioButton}
            type="radio" 
            name="method" 
            value="PUT"
            onChange={onChange} 
          /> PUT 
        </label>
        <label className={style.Radio}>
          <input 
            className={style.RadioButton}
            type="radio" 
            name="method" 
            value="PATCH" 
            onChange={onChange}
          /> PATCH 
        </label>
        <label className={style.Radio}>
          <input 
            className={style.RadioButton}
            type="radio" 
            name="method" 
            value="DELETE"
            onChange={onChange}
          /> DELETE 
        </label>
      </div>

      <textarea 
        placeholder="JSON Body"
        name="textBody"
        value={textBody}
        onChange={onChange}
      >
      </textarea>

      <button type="submit">GO!</button>

    </form>
  </div>
);

Form.propTypes = {
  url: PropTypes.string.isRequired,
  textBody: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;

