export const pictureReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'FETCH_REQUEST':
      return state;
    case 'FETCH_SUCCESS': 
      return {...state, payload: action.payload};
    default:
      return state;
  }
}
