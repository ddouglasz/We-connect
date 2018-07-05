import { GET_USER_PROFILE_SUCCESSFUL, GET_USER_PROFILE_FAILED } from '../actions/types';

const initialState = {
  userFound: false,
  hasError: false,
  userProfile: [],
  error: ''
};
/**
   * @param {object} state
   * @param {object} action
   * @return {object} object
   */
export default function getUserProfile(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USER_PROFILE_SUCCESSFUL:
      return {
        userFound: true,
        hasError: false,
        userProfile: action.userProfile,
        error: ''
      };

    case GET_USER_PROFILE_FAILED:
      return {
        userFound: false,
        hasError: true,
        userProfile: [],
        error: action.error
      };
    default: return state;
  }
}
