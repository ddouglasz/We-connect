import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Cards from '../../../../components/businesses/Presentational/cards.jsx';


configure({ adapter: new Adapter() });
const props = {
  name: 'douglas',
  description: 'good company',
  category: 'technology',
  id: 1,
  image: 'company.jpg',
  createdAt: '2018-07-25T10:08:38.181Z'
};
describe('Compnent: Card', () => {
  it('should render the component successfully', () => {
    const wrapper = shallow(<Cards {...props}/>);
    expect(wrapper.find('div').length).toBe(5);
    expect(wrapper.find('TextTruncate').length).toBe(1);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('hr').length).toBe(1);
  });
});
