import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReviewsCard from '../../../../components/businesses/Presentational/ReviewsCards.jsx';

configure({ adapter: new Adapter() });

let props;
const setup = () => {
  props = {
    reviews: [
      {
        reviewer: 'steven',
        review: 'arctic monkeys...flipping cigars',
        rating: 3,
        createdAt: '2018-07-25T10:08:38.181Z'
      }
    ]
  };
  return shallow(<ReviewsCard { ...props} />);
};

describe('Component: ReviewsCard', () => {
  it('should render the component successfully', () => {
    const wrapper = setup();
    expect(wrapper.find('small').length).toBe(1);
    expect(wrapper.find('div').length).toBe(2);
    expect(wrapper.find('ReactStars').length).toBe(1);
  });
});

