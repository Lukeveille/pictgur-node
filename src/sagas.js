import { select, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function fetchGallery(fetch) {
  const header = {
    Accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_IMGUR_ACCESS_TOKEN
  }
  return axios({
    method: 'GET',
    headers: header,
    url: 'https://api.imgur.com/3/gallery/' + fetch.section + '/' + fetch.sort
  });
};

function* workerSaga() {
  try {
    const section = yield select(state => state.section)
    const sort = yield select(state => state.sort)

    const response = yield call(() => fetchGallery({section, sort}));

    const data = response.data.data;

    console.log(data)

    yield put({ type: 'API_CALL_SUCCESS', data });

  } catch (error) {
    yield put({ type: 'API_CALL_FAILURE', error });
  };
};

export function* actionWatcher() {
  yield takeLatest('API_CALL_REQUEST', workerSaga);
  yield takeLatest('SET_SECTION', workerSaga);
  yield takeLatest('SET_SORT', workerSaga);
};
