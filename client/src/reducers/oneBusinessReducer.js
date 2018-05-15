import { ONE_BUSINESS } from '../actions/types';

export default function business(state = {}, action = {}) {
  switch (action.type) {
    case ONE_BUSINESS:
      return action.oneBusiness;

    default:
      return state;
  }
}
