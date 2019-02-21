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
    return fetch('https://api.imgur.com/3/account/Lukeveille/images/',{
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_IMGUR_ACCESS_TOKEN
      }
    })
    .then(data => data.json())
    .then(data => {
      dispatch(fetchPicturesSuccess(data))
    })
    .catch(err => dispatch(fetchPicturesError(err)));
  }
}