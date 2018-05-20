import { DELETE_FAILED, DELETE_SUCCESSFUL } from '../actions/types';

const initialState = {
    isDeleted: false,
    hasError: false,
    message: '',
    error: ''
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case DELETE_FAILED:
            return {
                isDeleted: false,
                hasError: true,
                message: '',
                error: action.error
            };
        case DELETE_SUCCESSFUL:
            return {
                isDeleted: true,
                hasError: false,
                message: action.message,
                error: ''
            };
            default: return state;
    }
}