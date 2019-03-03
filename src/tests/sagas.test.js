import { API_CALL_REQUEST, SET_SECTION, SET_SORT } from '../actionTypes';
import { workerSaga, actionWatcher, fetchGallery } from '../sagas.js'
// import cloneableGenerator from 'redux-saga';
import { select, takeLatest, call, put } from 'redux-saga/effects';
import { sectionSelect, sortSelect } from '../selectors';
import { apiSuccess, apiFailure } from '../actions';

describe('the actionWatcher generator', () => {
  const testSaga = actionWatcher();
  it('make an API call', () => {
    expect(testSaga.next().value).toEqual(takeLatest(API_CALL_REQUEST, workerSaga));
  });
  it('update the section being called', () => {
    expect(testSaga.next().value).toEqual(takeLatest(SET_SECTION, workerSaga));
  });
  it('update the sorting options', () => {
    expect(testSaga.next().value).toEqual(takeLatest(SET_SORT, workerSaga));
  });
  it('is done', () => {
    expect(testSaga.next().done).toEqual(true);
  });
});
describe('the workerSaga generator', () => {
  const testSaga = workerSaga();
  const section = select(sectionSelect);
  const sort = select(sortSelect);
  it('selects the current section setting', () => {
    expect(testSaga.next().value).toEqual(section);
  });
  it('selects the current sort setting', () => {
    expect(testSaga.next().value).toEqual(sort);
  });
  it('fetches based on gallery settings', () => {
    expect(testSaga.next().value).toEqual(call(() => fetchGallery({section, sort})));
  });
  it('fetches based on gallery settings', () => {
    expect(testSaga.next().value).toEqual(put(apiSuccess()));
  });
});