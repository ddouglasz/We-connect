import { EDIT_SUCCESSFUL, EDIT_FAILED } from '../actions/types';

const initialState = {
  hasCreated: false,
  hasError: false,
  business: {},
  error: {}
};
  /**
   * @param {object} state
   * @param {object} action
   * @return {object} object
   */
export default function businesses(state = initialState, action = {}) {
  switch (action.type) {
    case EDIT_SUCCESSFUL:
      return {
        hasCreated: true,
        hasError: false,
        business: action.business,
        error: {}
      };
    case EDIT_FAILED:
      return {
        hasCreated: false,
        hasError: true,
        business: {},
        error: action.error
      };

    default:
      return state;
  }
}
