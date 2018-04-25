import { ADD_FLASH_MESSAGE } from './types';

/**
 * @return { object } raddFlashMessage
 * @param { * } message
 *
*/
export default function addFlashMessage(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  };
}
