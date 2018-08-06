import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import ConnectedNavBar, { NavBar } from '../../../../components/home/smart/NavBar.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
let context;
const setup = () => {
  props = {
    logout: jest.fn(() => Promise.resolve()),
    auth: {
      isAuthenticated: true
    },
  };
  context = {
    router: {
      history: {
        push: jest.fn()
      }
    }
  };
  return shallow(<NavBar {...props}/>, { context });
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: ''
  }
};


describe('Component: NavBar', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('span').length).toBe(5);
  });
});

const store = mockStore({
  auth: {}
});

describe('Connected SignUpForm', () => {
  it('should return user from state', () => {
    const wrapper = shallow(<ConnectedNavBar store={store} />);
    expect(wrapper.length).toBe(1);
  });

  it('should call logout function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const logout = jest.spyOn(wrapper.instance(), 'logout');
    action.logout(event);
    expect(logout).toBeCalled();
  });
});
