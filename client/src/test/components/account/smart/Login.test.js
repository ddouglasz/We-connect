import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
// import { RegisterBusiness } from '../../../../components/businesses/smart/RegisterBusiness.jsx';
import ConnectedLogin, { Login } from '../../../../components/account/smart/Login.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    LoginAction: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
  };
  return shallow(<Login {...props}/>);
};

describe('Component: LoginAction', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('HomePage').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
  });
});

const store = mockStore({});

describe('Connected Login', () => {
  it('should return user from state', () => {
    const wrapper = shallow(<ConnectedLogin store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
