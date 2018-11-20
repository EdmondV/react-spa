import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Main from './components/main';
import Content from './components/content';
import { Provider } from 'react-redux';
import { reducers } from './redux/index';
import store from './store';

const history = createBrowserHistory()

const Store = store(reducers);

render(
  <Provider store={Store}>
    <Router history={history}>
      <Route exact path='/' component={Main} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
