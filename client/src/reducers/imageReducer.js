import { ADD_IMAGE_SUCCESSFUL, ADD_IMAGE_FAILED } from '../actions/types';

const initialState = {
  isCreated: false,
  hasError: false,
  imageUrl: '',
  error: ''
};
  /**
   * @param {object} state
   * @param {object} action
   * @return {object} object
   */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_IMAGE_SUCCESSFUL:
      return {
        isCreated: true,
        hasError: false,
        imageUrl: action.image,
        error: ''
      };

    case ADD_IMAGE_FAILED:
      return {
        isCreated: false,
        hasError: true,
        imageUrl: '',
        error: action.error
      };
    default: return state;
  }
};
