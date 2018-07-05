import React from 'react';
import shortId from 'shortid';
import moment from 'moment';
import glyph from '../../public/images/profileGlyph.jpg';

const ReviewsCard = ({ reviews }) => (
  reviews.map(userReviews => (
      <div className="container containers my-4 darker" key={shortId.generate()}>
      <img className="d-flex mr-3 reviews-image" id="reviews-image" src={glyph} alt="Generic placeholder image" />
           <p>{userReviews.review}</p>
         <small className="pull-right bottom-0"> <a>Reviewed on:</a> {moment(userReviews.createdAt).format('MMMM Do YYYY, h:mm:ss a')}  </small>
</div>
  ))
);
export default ReviewsCard;

