import React from 'react';
import {render, hydrate} from 'react-dom';
import App from '../src/App';

import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../src/appStore/store';

if(window.__initialData){
  hydrate(
    <Provider store={store}>
      <App />
      </Provider>,
    document.getElementById('root')
  )
  delete window.__initialData;
} else {
  render(
    <Provider store={store}>
      <App />
      </Provider>,
    document.getElementById('root')
  )
}
