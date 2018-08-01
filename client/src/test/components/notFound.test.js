import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import NotFound from '../../../src/components/notFound.jsx';


configure({ adapter: new Adapter() });
describe('Compnent: notFound', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('h1').length).toBe(1);
  });
});
