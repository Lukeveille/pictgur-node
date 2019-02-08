import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  router: routerReducer,
  pictures: (state = [{id: '1', src: 'A', alt: 'B'}], action) => {
    return state;
  },
  app: (state = {}, action) => state
})