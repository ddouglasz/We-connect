import React from 'react';
import shortId from 'shortid';

const ReviewsCard = ({ reviews }) => {
  return (
    reviews.map(review => (
      <li className="media my-4" key={shortId.generate()}>
        <img className="d-flex mr-3" id="reviews-image" src={require('../../public/images/profileGlyph.jpg')} alt="Generic placeholder image" />
        <div className="media-body">
          <h5 className="mt-0 mb-1">List-based media object</h5>
          {review.review}
          </div>
      </li>
    ))
  );
}
export default ReviewsCard;