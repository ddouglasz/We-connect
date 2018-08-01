import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
// import { RegisterBusiness } from '../../../../components/businesses/smart/RegisterBusiness.jsx';
import ConnectedRegisterBusinessPage, { RegisterBusinessPage } from '../../../../components/businesses/smart/RegisterBusinessPage.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props, props2;
const setup = () => {
  props = {
    business: {
      id: 1,
      title: 'bestMart',
      image: 'image.jpeg',
      description: 'we sell the best penguins... dolphins would envy you',
      category: 'technology',
      createdAt: '2018-07-25T10:08:38.181Z'
    },
    match: { params: {} },
    state: {
      oneBusiness: {
        id: 1,
        title: 'bestMart',
        image: 'image.jpeg',
        description: 'we sell the best penguins... dolphins would envy you',
        category: 'technology',
        createdAt: '2018-07-25T10:08:38.181Z'
      }
    },
    registerBusinessAction: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
    editBusinessAction: jest.fn(() => Promise.resolve()),
    mapStateToProps: jest.fn(() => Promise.resolve()),
  };
//   props2 = {
//     match: {}
//   };
  return shallow(<RegisterBusinessPage />);
};

describe('Component: RegisterBusinessPage', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    // expect(wrapper.find('RegisterBusiness').length).toBe(1);
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
    const wrapper = shallow(<ConnectedRegisterBusinessPage store={store} {...props} />);
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
    const wrapper = shallow(<ConnectedRegisterBusinessPage store={store} {...props2} />);
    expect(wrapper.length).toBe(1);
  });
});
