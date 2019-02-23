import { put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';

function * fetchGallery(actionObj) {
  const json = yield fetch('https://api.imgur.com/3/account/Lukeveille/images/',{
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_IMGUR_ACCESS_TOKEN
    }
  });

  yield [
    put({ type: 'DATA_RECEIVED', json: json }),
    put(push('/city' + json))
  ];
};

function * actionWatcher() {
  yield takeLatest('GET_GALLERY', fetchGallery);
};

export default function * rootSaga() {
  yield all([
    actionWatcher(),
  ]);
};