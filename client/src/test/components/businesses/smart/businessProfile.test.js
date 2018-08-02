import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import ConnectedBusinessProfile, { BusinessProfile } from '../../../../components/businesses/smart/BusinessProfile.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    user: {
      firstName: 'Admin',
      lastName: 'Admin'
    },
    business: {
      id: 1,
      title: 'bestMart',
      image: 'image.jpeg',
      description: 'we sell the best penguins... dolphins would envy you',
      category: 'technology',
      createdAt: '2018-07-25T10:08:38.181Z'
    },
    match: { params: { id: 1 } },
    reviewsData: {
      Reviews: {
        rows: [{ review: 'Nice', reviewer: 'Admin' }],
        count: 1
      }
    },
    getReviewsAction: jest.fn(),
    postReviewAction: jest.fn(() => Promise.resolve()),
    getOneBusinessAction: jest.fn(),
    deleteBusinessAction: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
  };
  return shallow(<BusinessProfile {...props} />);
};

const setup2 = () => {
  props = {
    user: {
      firstName: 'Admin',
      lastName: 'Admin'
    },
    business: {
      id: 1,
      title: 'bestMart',
      image: 'image.jpeg',
      description: 'we sell the best penguins... dolphins would envy you',
      category: 'technology',
      createdAt: '2018-07-25T10:08:38.181Z'
    },
    match: { params: { id: 1 } },
    reviewsData: [],
    getReviewsAction: jest.fn(),
    postReviewAction: jest.fn(() => Promise.resolve()),
    getOneBusinessAction: jest.fn(),
    deleteBusinessAction: jest.fn(() => Promise.resolve()),
    addFlashMessage: jest.fn(() => Promise.resolve()),
  };
  return shallow(<BusinessProfile {...props} />);
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: ''
  }
};

describe('Component: BusinessProfile', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('ReviewsCard')).toHaveLength(1);
    expect(wrapper.find('div')).toHaveLength(19);
  });
});

describe('Component: BusinessProfile', () => {
  it('should render the component successfully', () => {
    const wrapper = setup2();
    expect(wrapper.find('p')).toHaveLength(1);
  });
});

describe('Connected BusinessProfile', () => {
  it('tests that the comnponent successfully renders', () => {
    const allBusinesses = {
      oneBusiness: {
        id: 1,
        title: 'bestMart',
        image: 'image.jpeg',
        description: 'we sell the best penguins... dolphins would envy you',
        category: 'technology',
        location: 'abuja',
        email: 'email@email.com',
        createdAt: '2018-07-25T10:08:38.181Z',
        updatedAt: '2018-07-25T10:08:38.181Z'
      },
      allReviews: []
    };
    const store = mockStore({
      allBusinesses,
      auth: {
        user: {}
      },
      deleteBusiness: ''
    });
    const wrapper = shallow(<ConnectedBusinessProfile store={store} />);
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
  it('should call onRatingChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onRatingChange = jest.spyOn(wrapper.instance(), 'onRatingChange');
    action.onRatingChange(2);
    expect(onRatingChange).toBeCalled();
  });
  it('should call onDelete function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onDelete = jest.spyOn(wrapper.instance(), 'onDelete');
    action.onDelete(event);
    expect(onDelete).toBeCalled();
  });
});
