import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/main';
import Content from './components/content';
import Pagination from './components/pagination';
import NavBar from './components/navBar';
import Footer from './components/footer';
import { Provider } from 'react-redux';
import { reducers } from './redux/index';
import store from './store';

const Store = store(reducers)
render(
  <Provider store={Store}>
    <BrowserRouter>
      <div>
        <Main />
        <NavBar />
        <Route path='/' component={Content} />
        <Pagination />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
