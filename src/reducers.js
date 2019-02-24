const initialState = {
  fetching: false,
  data: null,
  error: null
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'API_CALL_REQUEST':
      return { ...state, fetching: true, error: null };
    case 'API_CALL_SUCCESS':
      return { ...state, fetching: false, data: action.data };
    case 'API_CALL_FAILURE':
      return { ...state, fetching: false, data: null, error: action.error };
    default: return state;
  }
}
