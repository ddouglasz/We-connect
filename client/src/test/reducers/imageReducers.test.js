import {
  ADD_IMAGE_SUCCESSFUL,
  ADD_IMAGE_FAILED
}
  from '../../actions/types';
import imageReducer from '../../reducers/imageReducer';

const initialState = {
  isCreated: false,
  hasError: false,
  imageUrl: '',
  error: ''
};

describe(' image reducer testing', () => {
  it('Should set an image string in the state when passed with ADD_IMAGE_SUCCESSFUL action type', () => {
    const action = {
      type: ADD_IMAGE_SUCCESSFUL,
      image: 'someimagehere.jpeg'
    };
    const newState = imageReducer(initialState, action);
    expect(newState.imageUrl).toEqual('someimagehere.jpeg');
  });

  it('Should set error string in the state for a given business when passed with ADD_IMAGE_FAILED action type', () => {
    const action = {
      type: ADD_IMAGE_FAILED,
      error: 'image upload failed. kindly check your network'
    };
    const newState = imageReducer(initialState, action);
    expect(newState.error).toEqual('image upload failed. kindly check your network');
  });

  it('Should return a default state when no action type is passed', () => {
    const action = {};
    const newState = imageReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});

