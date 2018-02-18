// import { createStore } from 'redux'
// // import { reducers } from './reducers/index.js'
//
// const configureStore = (reducers) => {
//   const reduxStore = createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//    )
//   return reduxStore
// }
//
// export default configureStore


import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const configureStore = (reducers, sagas) => {
  const reduxStore = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)))

  sagaMiddleware.run(sagas)

  return reduxStore
}

export default configureStore
