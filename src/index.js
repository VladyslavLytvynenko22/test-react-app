import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
