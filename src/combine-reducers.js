import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { pictureReducer } from './reducers/picture-reducer.js'

export default combineReducers({
  router: routerReducer,
  pictureReducer
})
