import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import userReducer from './reducers/userReducer'
import mathReducer from './reducers/mathReducer'

const store = createStore(combineReducers({
  user: userReducer,
  math: mathReducer
}),
{},
applyMiddleware(logger)
)

export default store
