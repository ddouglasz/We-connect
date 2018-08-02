import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import ConnectedSignUp, { SignUp } from '../../../../components/account/smart/SignUp.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    SignUpActionRequest: jest.fn(() => Promise.resolve()),
    addFlashMessageRequest: jest.fn(() => Promise.resolve()),
  };
  return shallow(<SignUp {...props}/>);
};

describe('Component: SignUp', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('SignUpForm').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
  });
});

const store = mockStore({});

describe('Connected SignUp', () => {
  it('should return user from state', () => {
    const wrapper = shallow(<ConnectedSignUp store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
