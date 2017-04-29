import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Product from './app/containers/Product';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';

//import 'todomvc-app-css/index.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Product}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
