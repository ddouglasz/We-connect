import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import HomePage from '../../../../components/Home/smart/HomePage.jsx';

configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    state: {
      errors: [],
      email: 'admin@email.com',
      password: 'password',
      isLoading: false
    },
    LoginAction: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
  };
  return shallow(<HomePage {...props}/>);
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: ''
  }
};

describe('Component: HomePage', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(20);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('Link').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
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

