const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const fetchPostsRequest = () => ({
  type: FETCH_REQUEST
});
const fetchPostsSuccess = payload => ({
  type: FETCH_SUCCESS,
  payload
});
const fetchPostsError = error => ({
  type: FETCH_ERROR,
  error
});

function fetchPosts() {
  const URL = "http://localhost:9095/api/pictures";
  return fetch(URL, { method: 'GET' })
  .then( response => Promise.all([response, response.json()]))
  .catch(error => {console.log(error)})
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