import React from 'react';
import shortId from 'shortid';
import moment from 'moment';

const ReviewsCard = ({ reviews }) => (
  reviews.map(userReviews => (
      <div className="container containers my-4 darker" key={shortId.generate()}>
           <p>{userReviews.review}</p>
           <small className="fa fa-user" style={{ color: 'grey' }}> {userReviews.reviewer}</small>
         <small className="pull-right bottom-0"> <a>Reviewed on:</a> {moment(userReviews.createdAt).format('MMMM Do YYYY, h:mm:ss a')}  </small>
</div>
  ))
);
export default ReviewsCard;

