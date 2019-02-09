const initialState = {
  payload: [],
  isFetching: false,
  isError: false
}

export const pictureReducer = (state = initialState, action) => {
  console.log(action)
  console.log(state)
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        payload: [],
        isFetching: true,
        isError: false,
        req: 'req'
      };
    case 'FETCH_SUCCESS': 
      return {
        ...state,
        payload: action.pictures,
        isFetching: false,
        isError: false,
        suc: 'suc'
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        isError: true,
        isFetching: false,
        err: 'err'
      }
    default:
      return state;
  }
}
