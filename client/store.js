import { createStore, applyMiddleware } from 'redux';

const configureStore = (reducers) => {
  const reduxStore = createStore(reducers);

  return reduxStore;
}

export default configureStore;
