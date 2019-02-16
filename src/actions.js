import store from './store.js'

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const fetchPicturesRequest = () => ({
  type: FETCH_REQUEST
});
const fetchPicturesSuccess = pictures => ({
  type: FETCH_SUCCESS,
  pictures
});
const fetchPicturesError = error => ({
  type: FETCH_ERROR,
  error
});

export const fetchPictures = () => {
  store().dispatch(fetchPicturesRequest());
  return (dispatch, getState) => {
    return fetch("http://localhost:9095/api/pictures")
    .then(data => data.json())
    .then(data => {
      dispatch(fetchPicturesSuccess(data.pictures))
    })
    .catch(err => dispatch(fetchPicturesError(err)));
  }
}