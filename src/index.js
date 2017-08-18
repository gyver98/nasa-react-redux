require('./assets/stylesheets/styles.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';

// render our App component and mount it to our #root
ReactDOM.render(
  <App />,
  document.getElementById('root')
);