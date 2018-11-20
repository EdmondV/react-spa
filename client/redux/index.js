import { combineReducers } from 'redux'

const reducers = combineReducers({
  req: require('./redux').reducer
})

export { reducers }
