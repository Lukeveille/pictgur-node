import { reducers, initialState } from '../reducers';
import * as type from '../actionTypes';

describe('All reducers', () => {
  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });
  it('should begin fetching API call', () => {
    expect(reducers(initialState, {
      type: type.API_CALL_REQUEST
    })).toEqual({
      ...initialState,
      fetching: true,
      error: null
    });
  });
  it('should return a successful API call', () => {
    expect(reducers(initialState, {
      type: type.API_CALL_SUCCESS,
      payload: 'success'
    })).toEqual({
      ...initialState,
      fetching: false,
      data: 'success'
    });
  });
  it('should return an error and no data if an API call fails', () => {
    expect(reducers(initialState, {
      type: type.API_CALL_FAILURE,
      error: 'error'
    })).toEqual({
      ...initialState,
      fetching: false,
      data: null,
      error: 'error'
    });
  });
  it('can set the section being viewed', () => {
    expect(reducers(initialState, {
      type: type.SET_SECTION,
      section: 'top'
    })).toEqual({
      ...initialState,
      section: 'top'
    })
  });
  it('can set the sorting options', () => {
    expect(reducers(initialState, {
      type: type.SET_SORT,
      sort: 'top'
    })).toEqual({
      ...initialState,
      sort: 'top'
    })
  });
  it('toggle the autoplay setting', () => {
    expect(reducers(initialState, {
      type: type.SET_AUTOPLAY,
      autoplay: false
    })).toEqual({
      ...initialState,
      autoplay: false
    })
  });
});