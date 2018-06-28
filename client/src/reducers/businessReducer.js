import { ALL_BUSINESSES } from '../actions/types';

export default function businesses(state = [], action = {}) {
  switch (action.type) {
    case ALL_BUSINESSES:
      return action.allBusinesses;

    default:
      return state;
  }
}
