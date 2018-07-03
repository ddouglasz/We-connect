import React from 'react';
import shortId from 'shortid';
import moment from 'moment';


const ReviewsCard = ({ reviews, createdAt }) => {
  return (
    reviews.map(userReviews => (
      //   <img className="d-flex mr-3" id="reviews-image" src={require('../../public/images/profileGlyph.jpg')} alt="Generic placeholder image" />
      //   <div className="media-body">
      //     <h5 className="mt-0 mb-1">List-based media object</h5>
      //     </div>
      <div className="container containers my-4 darker" key={shortId.generate()}>
      {/* <li className="media my-4 card" key={shortId.generate()}> */}
      <img className="d-flex mr-3 reviews-image" id="reviews-image" src={require('../../public/images/profileGlyph.jpg')} alt="Generic placeholder image" />
           <p>{userReviews.review}</p>
          {/* <span className="time-left pull-right">11:01</span> */}
         <small className="pull-right bottom-0"> <a>Reviewed on:</a> {moment(userReviews.createdAt).format('MMMM Do YYYY, h:mm:ss a')}  </small>        
       {/* </li> */}
</div>
        ))
      );
    }
    export default ReviewsCard;
    
