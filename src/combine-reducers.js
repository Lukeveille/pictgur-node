import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  router: routerReducer,
  pictures: (state = [], action) => {
    switch(action.type) {
      case 'INITIALIZE':
        return action.initialState
      default: return state;
    }    
  }
})