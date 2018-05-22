import React from 'react';

const ReviewsCard = ({ reviews }) => {
  return (
    <li className="media my-4">
      <img className="d-flex mr-3" id="reviews-image" src={require('../../public/images/profileGlyph.jpg')} alt="Generic placeholder image" />
      <div className="media-body">
        <h5 className="mt-0 mb-1">List-based media object</h5>
        {reviews}
        </div>
    </li>
  );
}
export default ReviewsCard;