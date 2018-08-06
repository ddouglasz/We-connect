import auth from '../../reducers/auth';
import { CURRENT_USER } from '../../actions/types';

describe(' auth reducer testing', () => {
  it('Should set the current user when passed with the action type of CURRENT_USER', () => {
    const initialState = {
      isAuthenticated: false,
      user: {}
    };
    const user = {
      id: 1,
      email: 'steve@steve.com',
      password: 'steve123'
    };
    const action = {
      type: CURRENT_USER,
      user
    };
    const newState = auth(initialState, action);
    expect(newState.isAuthenticated).toEqual(true);
  });
  it('Should return a default state when no action type is passed', () => {
    const initialState = {
      isAuthenticated: false,
      user: {}
    };
    const action = {};
    const newState = auth(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
