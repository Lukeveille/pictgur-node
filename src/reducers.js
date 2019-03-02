import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE,
  SET_SECTION,
  SET_SORT,
  SET_AUTOPLAY
} from './actionTypes';

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
    case API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      return { ...state, fetching: false, data: action.data };
    case API_CALL_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error };
    case SET_SECTION:
      return { ...state, section: action.section };
    case SET_SORT:
      return { ...state, sort: action.sort };
    case SET_AUTOPLAY:
      return { ...state, autoplay: action.autoplay };
    default: return state;
  };
};
