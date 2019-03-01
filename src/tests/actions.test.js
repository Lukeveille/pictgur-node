import * as actions from '../actions'

describe('actions', () => {
  it('should create an action to set autoplay', () => {
    const autoplay = true;
    const expectedAction = {
      type: 'SET_AUTOPLAY',
      autoplay
    };
    expect(actions.setAutoplay(autoplay)).toEqual(expectedAction);
  });

  it('should create an action to set which section displays', () => {
    const section = 'top';
    const expectedAction = {
      type: 'SET_SECTION',
      section
    };
    expect(actions.setSection(section)).toEqual(expectedAction);
  });

  it('should create an action to set how the gallery sorts', () => {
    const sort = 'top';
    const expectedAction = {
      type: 'SET_SORT',
      sort
    };
    expect(actions.setSort(sort)).toEqual(expectedAction);
  });
  
  it('should create an action to make an API call', () => {
    const expectedAction = {
      type: 'API_CALL_REQUEST',
    };
    expect(actions.apiRequest()).toEqual(expectedAction);
  });

  it('should create an action to return the result of an API call', () => {
    const data = [];
    const expectedAction = {
      type: 'API_CALL_SUCCESS',
      data
    };
    expect(actions.apiSuccess(data)).toEqual(expectedAction);
  });

  it('should create an action to return an error when an API call fails', () => {
    const error = { message: 'error' };
    const expectedAction = {
      type: 'API_CALL_FAILURE',
      error
    };
    expect(actions.apiFailure(error)).toEqual(expectedAction);
  });
});