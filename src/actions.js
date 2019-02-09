// const INITIALIZE = 'INITIALIZE';
const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

// export const initialize = initialState => ({
//   type: INITIALIZE,
//   initialState
// });
const fetchPostsRequest = () => ({
  type: FETCH_REQUEST
});
const fetchPostsSuccess = payload => ({
  type: FETCH_SUCCESS,
  payload
});
const fetchPostsError = () => ({
  type: FETCH_ERROR
});

function fetchPosts() {
  const URL = "localhost:9095/api/pictures";
  return fetch(URL, { method: 'GET' })
  .then( response => Promise.all([response, response.json()]));
}

export function fetchPostsWithRedux() {
  return (dispatch) => {
  dispatch(fetchPostsRequest());
  return fetchPosts().then(([response, json]) =>{
      if(response.status === 200){
      dispatch(fetchPostsSuccess(json))
    }
    else{
      dispatch(fetchPostsError())
    }
  })
}
}