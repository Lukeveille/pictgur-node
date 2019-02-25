import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function fetchGallery() {
  const section = 'hot'
  const header = {
    Accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_IMGUR_ACCESS_TOKEN
  }
  return axios({
    method: 'GET',
    headers: header,
    url: 'https://api.imgur.com/3/gallery/' + section
  });
};

// function fetchGallery() {
//   return axios({
//     method: 'GET',
//     url: 'http://localhost:9095/api/pictures'
//   });
// };

function* workerSaga() {
  try {
    const response = yield call(fetchGallery);
    const data = response.data.data;

    yield put({ type: 'API_CALL_SUCCESS', data });

  } catch (error) {
    yield put({ type: 'API_CALL_FAILURE', error });
  };
};

export function* actionWatcher() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
};
