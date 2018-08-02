import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
// import { RegisterBusiness } from '../../../../components/businesses/smart/RegisterBusiness.jsx';
import ConnectedSignUpForm, { SignUpForm } from '../../../../components/account/smart/SignUpForm.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    state: {
      firstName: 'steve',
      lastName: 'steven',
      email: 'steve@steve.com',
      password: 'qwerty',
      errors: [],
      isLoading: false
    },
    SignUpAction: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
  };
  return shallow(<SignUpForm {...props}/>);
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: ''
  }
};

describe('Component: SignUpForm', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(25);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('input').length).toBe(4);
  });
});

const store = mockStore({});

describe('Connected SignUpForm', () => {
  it('should return user from state', () => {
    const wrapper = shallow(<ConnectedSignUpForm store={store} />);
    expect(wrapper.length).toBe(1);
  });

  it('should call onChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onChange = jest.spyOn(wrapper.instance(), 'onChange');
    action.onChange(event);
    expect(onChange).toBeCalled();
  });

  it('should call onSubmit function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSubmit = jest.spyOn(wrapper.instance(), 'onSubmit');
    action.onSubmit(event);
    expect(onSubmit).toBeCalled();
  });
});
