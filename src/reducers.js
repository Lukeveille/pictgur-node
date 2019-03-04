import * as type from './actionTypes';

export const initialState = {
  fetching: false,
  data: null,
  error: null,
  section: 'hot',
  sort: 'viral',
  autoplay: true
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case type.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case type.API_CALL_SUCCESS:
      return { ...state, fetching: false, data: action.payload };
    case type.API_CALL_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error };
    case type.SET_SECTION:
      return { ...state, section: action.section };
    case type.SET_SORT:
      return { ...state, sort: action.sort };
    case type.SET_AUTOPLAY:
      return { ...state, autoplay: action.autoplay };
    default: return state;
  }
};
