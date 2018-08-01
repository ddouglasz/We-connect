import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from '../../../src/components/App.jsx';


configure({ adapter: new Adapter() });
describe('Compnent: App', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<App />);
    // expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('NavBar').length).toBe(1);
    expect(wrapper.find('Routes').length).toBe(1);
    expect(wrapper.find('Footer').length).toBe(1);
  });
});
