import * as actions from '../actions';
import * as type from '../actionTypes';

describe('actions', () => {
  it('should create an action to set autoplay', () => {
    const autoplay = true;
    const expectedAction = {
      type: type.SET_AUTOPLAY,
      autoplay
    };
    expect(actions.setAutoplay(autoplay)).toEqual(expectedAction);
  });
  it('should create an action to set which section displays', () => {
    const section = 'top';
    const expectedAction = {
      type: type.SET_SECTION,
      section
    };
    expect(actions.setSection(section)).toEqual(expectedAction);
  });
  it('should create an action to set how the gallery sorts', () => {
    const sort = 'top';
    const expectedAction = {
      type: type.SET_SORT,
      sort
    };
    expect(actions.setSort(sort)).toEqual(expectedAction);
  });
  it('should create an action to make an API call', () => {
    const expectedAction = {
      type: type.API_CALL_REQUEST,
    };
    expect(actions.apiRequest()).toEqual(expectedAction);
  });
  it('should create an action to return the result of an API call', () => {
    const payload = [];
    const expectedAction = {
      type: type.API_CALL_SUCCESS,
      payload
    };
    expect(actions.apiSuccess(payload)).toEqual(expectedAction);
  });
  it('should create an action to return an error when an API call fails', () => {
    const error = { message: 'error' };
    const expectedAction = {
      type: type.API_CALL_FAILURE,
      error
    };
    expect(actions.apiFailure(error)).toEqual(expectedAction);
  });
});