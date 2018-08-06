import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
// import { RegisterBusiness } from '../../../../components/businesses/smart/RegisterBusiness.jsx';
import ConnectedEditBusiness, { EditBusiness } from '../../../../components/businesses/smart/EditBusiness.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    match: { params: { id: 1 } },
    business: {
      id: 1,
      title: 'bestMart',
      image: 'image.jpeg',
      description: 'we sell the best penguins... dolphins would envy you',
      category: 'technology',
      location: 'lagos',
      isLoading: false,
      Email: 'steve@gmail.com',

      createdAt: '2018-07-25T10:08:38.181Z'
    },
    registerBusinessAction: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
    editBusinessAction: jest.fn(() => Promise.resolve()),
    getOneBusinessAction: jest.fn(() => Promise.resolve()),
  };
  return shallow(<EditBusiness {...props} />);
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: ''
  }
};

describe('Component: RegisterBusinessPage', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(21);
  });
});

describe('Connected RegisterBusinessPage', () => {
  it('should return oneBusiness from state', () => {
    const allBusinesses = {
      business: {
        id: 1,
        title: 'bestMart',
        image: 'image.jpeg',
        description: 'we sell the best penguins... dolphins would envy you',
        category: 'technology',
        location: 'abuja',
        email: 'email@email.com',
        createdAt: '2018-07-25T10:08:38.181Z',
        updatedAt: '2018-07-25T10:08:38.181Z'
      }
    };

    const store = mockStore({
      allBusinesses
    });
    const wrapper = shallow(<ConnectedEditBusiness store={store} {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should return null', () => {
    const allBusinesses = {
      business: {
        id: 1,
        title: 'bestMart',
        image: 'image.jpeg',
        description: 'we sell the best penguins... dolphins would envy you',
        category: 'technology',
        location: 'abuja',
        email: 'email@email.com',
        createdAt: '2018-07-25T10:08:38.181Z',
        updatedAt: '2018-07-25T10:08:38.181Z'
      }
    };

    const store = mockStore({
      allBusinesses
    });
    const wrapper = shallow(<ConnectedEditBusiness store={store} {...props} />);
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

