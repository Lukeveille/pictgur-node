import { API_CALL_REQUEST, SET_SECTION, SET_SORT } from './actionTypes';
import { select, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { sectionSelect, sortSelect } from './selectors';
import { apiSuccess, apiFailure } from './actions';

export function fetchGallery(fetch) {
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

export function* workerSaga() {
  try {
    const section = yield select(sectionSelect);
    const sort = yield select(sortSelect);

    const response = yield call(fetchGallery,{section, sort});

    const payload = response.data.data;

    yield put(apiSuccess(payload));

  } catch (error) {
    yield put(apiFailure(error));
  };
};

export function* actionWatcher() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
  yield takeLatest(SET_SECTION, workerSaga);
  yield takeLatest(SET_SORT, workerSaga);
};
