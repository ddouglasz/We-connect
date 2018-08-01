import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import { Cards } from '../../../../components/businesses/presentational/Cards.jsx';
import ConnectedBusinessCatalog, { BusinessCatalog } from '../../../../components/businesses/smart/BusinessCatalog.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    pagination: {
      presentPage: 1,
      limit: 6,
      count: 7
    },
    newBusiness: {
      id: 1,
      title: 'bestMart',
      image: 'image.jpeg',
      description: 'we sell the best penguins... dolphins would envy you',
      category: 'technology',
      createdAt: '2018-07-25T10:08:38.181Z'
    },
    getReviewsAction: jest.fn(),
    getBusinessAction: jest.fn(() => Promise.resolve()),
    getAllBusinessSearchAction: jest.fn(),
    componentDidMount: jest.fn(),
  };
  return shallow(<BusinessCatalog {...props} />);
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: ''
  }
};

describe('Component: BusinessCatalog', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(10);
    expect(wrapper.find('span').length).toBe(2);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('option').length).toBe(4);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('select').length).toBe(1);
    expect(wrapper.find('strong').length).toBe(1);
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(1);
  });
});

describe('Connected BusinessCatalog', () => {
  it('tests that the comnponent successfully renders', () => {
    const allBusinesses = {
      businesses: {
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
      pagination: {}
    };
    const store = mockStore({
      allBusinesses
    });
    const wrapper = shallow(<ConnectedBusinessCatalog store={store} />);
    expect(wrapper.length).toBe(1);
  });

  it('should call onChangepage function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onChangepage = jest.spyOn(wrapper.instance(), 'onChangepage');
    action.onChangepage();
    expect(onChangepage).toBeCalled();
  });

  it('should call onSearch function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSearch = jest.spyOn(wrapper.instance(), 'onSearch');
    action.onSearch(event);
    expect(onSearch).toBeCalled();
  });
  it('should call onChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onChange = jest.spyOn(wrapper.instance(), 'onChange');
    action.onChange(event);
    expect(onChange).toBeCalled();
  });
});
