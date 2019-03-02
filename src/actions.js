import * as action from './actionTypes';

export const setAutoplay = autoplay => ({ 
  type: action.SET_AUTOPLAY,
  autoplay
});
export const setSection = section => ({
  type: action.SET_SECTION,
  section
});
export const setSort = sort => ({
  type: action.SET_SORT,
  sort
});
export const apiRequest = () => ({
  type: action.API_CALL_REQUEST
});
export const apiSuccess = data => ({
  type: action.API_CALL_SUCCESS,
  data
});
export const apiFailure = error => ({
  type: action.API_CALL_FAILURE,
  error
});