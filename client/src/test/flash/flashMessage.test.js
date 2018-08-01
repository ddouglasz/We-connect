import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import FlashMessage from '../../components/flash/FlashMessage.jsx';


configure({ adapter: new Adapter() });
let props;
const setup = () => {
  props = {
    message: {
      text: 'success',
      type: 'successfully'
    },
    deleteFlashMessage: jest.fn(),
  };
  return shallow(<FlashMessage {...props} />);
};

describe('Compnent: FlashMessage', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should delete flash message successfully', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const deleteFlashMessage = jest.spyOn(wrapper.instance(), 'onClick');
    action.onClick();
    expect(deleteFlashMessage).toBeCalled();
  });
});
