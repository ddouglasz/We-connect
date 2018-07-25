import {
  ADD_FLASH_MESSAGE,
  DELETE_FLASH_MESSAGE
}
  from '../../actions/types';
import flashMessages from '../../reducers/flashMessages';

let initialState = [];
let newState;
let messageId;

describe(' flash message reducer testing', () => {
  it('Should set an image string in the state when passed with ADD_FLASH_MESSAGE action type', () => {
    const action = {
      type: ADD_FLASH_MESSAGE,
      message: {
        type: 'success',
        text: 'add flash message success'
      }
    };
    newState = flashMessages(initialState, action);
    messageId = newState[0].id;

    expect(newState[0].text).toEqual('add flash message success');
    expect(newState[0].type).toEqual('success');

    initialState = newState;
  });

  it('Should set a string in the state for a given business when passed with DELETE_FLASH_MESSAGE action type', () => {
    const action = {
      type: DELETE_FLASH_MESSAGE,
      id: messageId,
      error: 'image upload failed. kindly check your network'
    };
    newState = flashMessages(initialState, action);
    expect(newState).toEqual([]);

    initialState = newState;
  });

  it('Should set a string in the state for a given business when passed with DELETE_FLASH_MESSAGE action type', () => {
    const action = {
      type: DELETE_FLASH_MESSAGE,
      id: 4,
      error: 'image upload failed. kindly check your network'
    };
    newState = flashMessages(initialState, action);
    expect(newState).toEqual(initialState);

    initialState = newState;
  });

  it('Should return a default state when no action type is passed', () => {
    newState = flashMessages(undefined, undefined);
    expect(newState).toEqual(initialState);
  });
});

