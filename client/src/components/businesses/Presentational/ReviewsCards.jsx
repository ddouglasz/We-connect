import React from 'react';
import ReactStars from 'react-stars';
import shortId from 'shortid';
import moment from 'moment';

const ReviewsCard = ({ reviews }) => (
  <div>
    {
      reviews.map(userReviews => (
        <div className="container containers my-4 darker" key={shortId.generate()}>
          <p className="fa fa-user user-name" style={{ color: '#191970' }}> {userReviews.reviewer}</p>
          <p>{userReviews.review}</p>
          <ReactStars
            count={5}
            value={userReviews.rating}
            edit={false}
            size={24}
            color2='#ffaf00'
          />
        <small className="pull-right bottom-0"> <a>Reviewed on:</a> {moment(userReviews.createdAt).format('MMMM Do YYYY, h:mm:ss a')}  </small>
      </div>
      ))
    }
  </div>
);

export default ReviewsCard;
