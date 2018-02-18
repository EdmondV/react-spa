import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './components/main'
import Info from './components/info'
import { Provider } from 'react-redux'
import { reducers } from './redux/index'
import { sagas } from './sagas/index'
import store from './store'

const Store = store(reducers, sagas)
render(
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/info' component={Info} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
