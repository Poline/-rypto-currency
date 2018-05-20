import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
