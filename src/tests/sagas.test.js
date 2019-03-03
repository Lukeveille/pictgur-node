import { API_CALL_REQUEST, SET_SECTION, SET_SORT } from '../actionTypes';
import { workerSaga, actionWatcher, fetchGallery } from '../sagas.js'
import { select, takeLatest, call, put } from 'redux-saga/effects';
import { sectionSelect, sortSelect } from '../selectors';
import { apiSuccess, apiFailure } from '../actions';

describe('the actionWatcher generator', () => {
  const gen = actionWatcher();
  it('make an API call', () => {
    expect(gen.next().value).toEqual(takeLatest(API_CALL_REQUEST, workerSaga));
  });
  it('update the section being called', () => {
    expect(gen.next().value).toEqual(takeLatest(SET_SECTION, workerSaga));
  });
  it('update the sorting options', () => {
    expect(gen.next().value).toEqual(takeLatest(SET_SORT, workerSaga));
  });
  it('is done', () => {
    expect(gen.next().value).toBeUndefined();
    expect(gen.next().done).toBeTruthy();
  });
});

describe('the workerSaga generator', () => {
  const gen = workerSaga();
  const section = select(sectionSelect);
  const sort = select(sortSelect);

  it('selects the current section setting', () => {
    expect(gen.next().value).toEqual(section);
  });
  it('selects the current sort setting', () => {
    expect(gen.next(section).value).toEqual(sort);
  });
  it('fetches based on gallery settings', () => {
    expect(gen.next(sort).value).toEqual(call(fetchGallery, { section, sort }));
  });
  it('returns failure', () => {
    expect(gen.next().value).toEqual(put(apiFailure(TypeError("Cannot read property 'data' of undefined"))));
  });
  // it('returns success', () => {
  //   expect(gen.next().value).toEqual(put(apiSuccess(undefined)));
  // });
  it('is done', () => {
    expect(gen.next().value).toBeUndefined();
    expect(gen.next().done).toBeTruthy();
  });
});