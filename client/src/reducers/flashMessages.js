import findIndex from 'lodash/findIndex';
import shortid from 'shortid';
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types';

/**
   * @param {array} state
   * @param {object} action
   * @return {array} state
   */
let index;
export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ];
    case DELETE_FLASH_MESSAGE:
      index = findIndex(state, { id: action.id });
      if (index >= 0) {
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
      }
      return state;

    default: return state;
  }
};
