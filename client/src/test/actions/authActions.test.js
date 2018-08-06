import moxios from 'moxios';
import thunk from 'redux-thunk';
import decode from 'jwt-decode';
import configureMockStore from 'redux-mock-store';
import { SignUpAction, LoginAction, logout } from '../../actions/authActions';
import { CURRENT_USER } from '../../actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authActions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should dispatch login data for a successful login', (done) => {
    moxios.stubRequest('api/v1/auth/login', {
      status: 200,
      response: {
        token
      }
    });
    const expectedActions = [{
      type: CURRENT_USER,
      user: decode(token),
      isAuthenticated: true
    }];

    const userProfile = {
      username: 'mi',
      password: 'ki'
    };

    localStorage.setItem('token', token);

    const store = mockStore({});
    return store.dispatch(LoginAction(userProfile))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions().length).toBe(1);
        done();
      });
  });

  it('should dispatch signup data for a successful signup', (done) => {
    moxios.stubRequest('api/v1/auth/signup', {
      status: 200,
      response: {
        token
      }
    });
    const expectedActions = [{
      type: CURRENT_USER,
      user: decode(token),
      isAuthenticated: true
    }];

    const userProfile = {
      username: 'mi',
      password: 'ki'
    };

    localStorage.setItem('token', token);

    const store = mockStore({});
    return store.dispatch(SignUpAction(userProfile))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(store.getActions().length).toBe(1);
        done();
      });
  });

  it('should logout user', (done) => {
    const expectedActions = [{
      type: CURRENT_USER,
      user: {},
      isAuthenticated: true
    }];

    localStorage.setItem('token', token);
    localStorage.removeItem('token');

    const store = mockStore({});
    store.dispatch(logout());
    expect(localStorage.token).toBeUndefined();
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });
});
