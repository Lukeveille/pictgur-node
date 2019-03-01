export const setAutoplay = autoplay => ({ 
  type: 'SET_AUTOPLAY',
  autoplay
})
export const setSection = section => ({
  type: 'SET_SECTION',
  section
})
export const setSort = sort => ({
  type: 'SET_SORT',
  sort
})
export const apiRequest = () => ({
  type: 'API_CALL_REQUEST'
})
export const apiSuccess = data => ({
  type: 'API_CALL_SUCCESS',
  data
})
export const apiFailure = error => ({
  type: 'API_CALL_FAILURE',
  error
})