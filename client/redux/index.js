import { combineReducers } from 'redux'

const reducers = combineReducers({
  req: require('./request-redux').reducer
})

export { reducers }
