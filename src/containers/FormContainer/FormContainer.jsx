import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import Response from '../../components/Response/Response';
import HistoryList from '../../components/History/HistoryList';
import { fetchRequest } from '../../services/fetchRequest';

const FormContainer = () => {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('');
  const [textBody, setTextBody] = useState('');
  const [response, setResponse] = useState([]);
  const [history, setHistory] = useState([]);

  const handleChange = ({ target }) => {
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'textBody') setTextBody(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRequest(url, method, textBody)
      .then(json => {
        setResponse(json);
        setHistory(preHistory => [{ url, method }, ...preHistory]);
      }); 
  };

  return (
    <>
      <HistoryList history={history} />
      <Form
        url={url} 
        textBody={textBody} 
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Response response={response} />
    </>

  );

};

export default FormContainer;

