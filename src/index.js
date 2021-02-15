import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authirization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

var myRequestInterceptor = axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);
var myResponseInterceptor = axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    Promise.reject(error);
  }
);

axios.interceptors.request.eject(myRequestInterceptor);
axios.interceptors.response.eject(myResponseInterceptor);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
