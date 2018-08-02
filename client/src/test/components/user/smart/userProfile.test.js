import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import ConnectedUserProfile, { UserProfile } from '../../../../components/user/smart/userProfile.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    state: {
      firstName: 'steve',
      lastName: 'admin',
      bio: 'steve steve',
      errors: [],
      isLoading: false
    },
    business: {
      id: 1,
      userId: 1,
      title: 'business',
      image: 'image.jpeg',
      description: 'description description',
      category: 'technology'
    },
    userDetails: {
      firstName: '',
      lastName: '',
      bio: ''
    },
    userData: {
      Businesses: []
    },
    UserDashBoardAction: jest.fn(() => Promise.resolve()),
    getAllBusinessSearchAction: jest.fn(() => Promise.resolve()),
    editUserProfile: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
  };
  return shallow(<UserProfile {...props} />);
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: ''
  }
};

describe('Component: UserProfile', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(22);
  });
});

describe('Connected UserProfile', () => {
  it('tests that the comnponent successfully renders', () => {
    const UserData = {
      state: {
        allBusinesses: {
          userProfile: {}
        }
      }
    };
    const store = mockStore({
      UserData,
      auth: {
        user: {}
      },
      allBusinesses: {
        userProfile: {}
      }
    });
    const wrapper = shallow(<ConnectedUserProfile store={store} />);
    expect(wrapper.length).toBe(1);
  });

  it('should call onSubmit function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSubmit = jest.spyOn(wrapper.instance(), 'onSubmit');
    action.onSubmit(event);
    expect(onSubmit).toBeCalled();
  });

  it('should call onChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onChange = jest.spyOn(wrapper.instance(), 'onChange');
    action.onChange(event);
    expect(onChange).toBeCalled();
  });
});
