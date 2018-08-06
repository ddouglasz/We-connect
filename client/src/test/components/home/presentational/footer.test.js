import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Footer from '../../../../components/home/presentational/Footer.jsx';


configure({ adapter: new Adapter() });
describe('Compnent: Footer', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').length).toBe(1);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('i').length).toBe(1);
    expect(wrapper.find('a').length).toBe(1);
  });
});
