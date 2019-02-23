import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  router: routerReducer,
  gallery: state => (state = [])
  // pictures: (state, action) => {
  //   switch (action.type) {
  //     case 'GET_GALLERY':
  //       return { ...state, loading: true, callDone: true };
  //     case 'DATA_RECEIVED':
  //       return { ...state, payload: action.pictures.data, loading: false};
  //     default: return state;
  //   }
  // }
})
