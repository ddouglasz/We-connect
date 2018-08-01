import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import ConnectedFlashMessagesList, { FlashMessagesList } from '../../components/flash/FlashMessagesList.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    messages: [{
      id: 1
    }],
    deleteMessage: jest.fn(),
  };
  return shallow(<FlashMessagesList {...props} />);
};

describe('Component: FlashMessage', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('FlashMessage').length).toBe(1);
  });
});

describe('Connected FlashMessageList', () => {
  it('tests that the comnponent successfully renders', () => {
    const store = mockStore({
      messages: 'Profile update successful'
    });
    const wrapper = shallow(<ConnectedFlashMessagesList store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
