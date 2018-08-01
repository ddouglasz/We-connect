import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import React from 'react';
// import { RegisterBusiness } from '../../../../components/businesses/smart/RegisterBusiness.jsx';
import ConnectedRegisterBusiness, { RegisterBusiness } from '../../../../components/businesses/smart/RegisterBusiness.jsx';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });
let props;
let context;
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
      },
    },
    response: { },
    imageUrl: 'image.jpeg',
    registerBusinessAction: jest.fn(() => Promise.resolve()),
    saveImageCloudinary: jest.fn(() => Promise.resolve()),
    mapStateToProps: jest.fn(() => Promise.resolve()),
    isLoading: jest.fn(() => Promise.resolve()),
  };
  context = {
    router: {
      history: {}
    }
  };
  return shallow(<RegisterBusiness {...props} />, { context });
};

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: '',
    files: [{}, {}, {}]
  }
};

describe('Component: RegisterBusinessPage', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(21);
  });
});

describe('Connected RegisterBusiness', () => {
  it('should return registered business from state', () => {
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
      imageReducer: {
        imageUrl: 'image.jpeg'
      }
    });
    const wrapper = shallow(<ConnectedRegisterBusiness store={store} />, { context });
    expect(wrapper.length).toBe(1);
  });

  it('should call onChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onChange = jest.spyOn(wrapper.instance(), 'onChange');
    action.onChange(event);
    expect(onChange).toBeCalled();
  });

  it('should call onImageChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onImageChange = jest.spyOn(wrapper.instance(), 'onImageChange');
    action.onImageChange(event);
    expect(onImageChange).toBeCalled();
  });

  it('should call saveImage function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const saveImage = jest.spyOn(wrapper.instance(), 'saveImage');
    action.saveImage(event);
    expect(saveImage).toBeCalled();
  });

  it('should call onSubmit function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSubmit = jest.spyOn(wrapper.instance(), 'onSubmit');
    action.onSubmit(event);
    expect(onSubmit).toBeCalled();
  });
});
