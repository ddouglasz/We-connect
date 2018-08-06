import React from 'react';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFlashMessage } from '../../../actions/flashMessages';
import ReviewsCard from '../Presentational/ReviewsCards.jsx';
// import { title, description, category, location } from './RegisterBusiness.jsx';
import { getReviewsAction, postReviewAction } from '../../../actions/reviewsActions';
import { getOneBusinessAction, deleteBusinessAction } from '../../../actions/businessActions';

/**
   * @description -  Description of a given business profile
   * @class BusinessProfile
   */
export class BusinessProfile extends React.Component {
  /**
     * @description - business display form
     * @param {Object} props
     * @param {object} object
     */
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      rating: 0,
      errors: [],
      isLoading: false
    };
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
  }
  /**
   * @param {Object} event
   * @return {function} function
   */
  onDelete(event) {
    event.preventDefault();
    const { id } = this.props.match.params;
    this.props.deleteBusinessAction(id)
      .then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: `${'Business deleted successfully'}`
          });
          this.context.router.history.push('/businessCatalog');
        },
        () => {
          this.props.addFlashMessage({
            type: 'error',
            text: `${'Please Retry. Perhaps your internet is down '}`
          });
        }
      );
  }
  /**
   * @param {Object} event
   * @return {function} function
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  /**
   * @param {Object} newRating
   * @return {function} function
   */
  onRatingChange(newRating) {
    this.setState({ rating: newRating });
  }


  /**
   * @description -implement adding of reviews to a business
   * @param {Object} event
   * @return {function} function
   */
  onSubmit(event) {
    event.preventDefault();
    const { id } = this.props.match.params;
    this.setState({ errors: [], isLodaing: true });
    this.props.postReviewAction(this.state, id)
      .then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'review added successfully'
          });
          this.props.getReviewsAction(id);
          this.setState({ review: '', rating: 0 });
        },
        (err) => {
          const { error } = err.response.data.message;
          this.props.addFlashMessage({
            type: 'error',
            text: error
          });
        }
      );
  }

  /**
   * @description -get all reviews for a business when component mounts
   * @return {function} function
   */
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getOneBusinessAction(id);
    this.props.getReviewsAction(id);
  }
  /**
   * @param {object} business
   * @return {function} function
   */
  render() {
    const {
      business, user
    } = this.props;
    if (this.props.reviewsData.length === 0) {
      return <p>loading...</p>;
    }
    const reviewsDetails = this.props.reviewsData;

    const { id } = this.props.match.params;

    const { title, description, category, location, email } = business;

    const emptyReviews = (<h2> No reviews for this Business yet...</h2>);
    return (

      <div className="container " >
        <div className="form-actions" />
        <div className="row business-two" >
          <div className="col-sm-6 sticky-top1 container business-profile-card">
            <br />
            <div className="text">
              <h3>Business Profile</h3>
              <img className="img img-fluid" src={business.image} alt="Card image cap" width="537.5" />

              {user.id === business.userId ?
                (<div className="form-group form-spacing">
                  <label className="col-sm-3 control-label" />
                  <div className="col-sm-12">
                    <Link to={`/editBusiness/${id}`}>
                      <label className="editBusiness fa fa-edit" >
                        Edit
                  </label>
                    </Link>
                    <label
                      type="reset"
                      className=" fa-delete fa fa-trash"
                      id="btn-delete"
                      value="Delete Business"
                      onClick={this.onDelete}
                    >
                      Delete
                  </label>
                  </div>
                </div>) : null
              }
              <div className="form-group form-spacing">
                <label className="col-sm-6 control-label">
                  <h3>
                    <br />
                    <strong>{title}</strong>
                  </h3>
                </label>
              </div>
            </div>
            {/* <p>{this.props.reviewsData.Reviews.count}</p> */}
            <div className="form-group form-spacing">
              <label className="col-sm-12 control-label">
                <strong>Reviews:</strong> {reviewsDetails.Reviews.count} <div className="fa fa-commenting-o"></div>
              </label>
            </div>
            <div className="form-group form-spacing">
              <label className="col-sm-12 control-label">
                <strong>Business Description:</strong> {description}
              </label>
            </div>
            <div className="form-group form-spacing">
            </div>
            <div className="form-group form-spacing">
              <label className="col-sm-12 control-label">
                <strong>Business Category:</strong> {category}
              </label>
            </div>
            <div className="form-group form-spacing">
              <label className="col-sm-12 control-label">
                <strong>Business location:</strong> {location}
              </label>
            </div>
            <div className="form-group form-spacing">
              <label className="col-sm-12 control-label">
                <strong>Business Email: </strong> {email}
                <strong>
                  &nbsp;&nbsp;
                   </strong>
              </label>
            </div>
          </div>
          <div className="col-sm-6 personal-info ">
            <div className="form-profile" id="description">
              <br />
              <form className="form-horizontal" role="form">

                {user.id !== business.userId ? (<form onSubmit={this.onSubmit}>
                  <div className="form-group form-spacing row">
                    <div className="col-sm-12 my-4" id="description">
                      <textarea
                        name="review"
                        className="form-control textfield-width"
                        id="exampleTextarea"
                        rows="2" placeholder="Add a Review"
                        value={this.state.review}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="form-group form-spacing">
                    <div className="col-sm-12 display-side" >
                      <div id="postReview-stars"> <ReactStars
                        count={5}
                        onChange={this.onRatingChange}
                        value={this.state.rating}
                        size={24}
                        color2='#ffaf00' />
                      </div>
                      <button
                        disabled={this.state.isLoading}
                        className="btn text-white pull-right"
                        id="postReview-button"
                      >
                        Post a Review
                  </button>
                    </div>
                  </div>
                </form>) : null}
                <br />
                <div className="form-reviews" id="description-header">
                  {
                    reviewsDetails.length > 0 ? <h3>Reviews</h3> : null
                  }
                </div>
                <div className="edit-spacing col-sm-12" id="chat-cards-buttom-spacing">
                  <ul className="list-unstyled">
                    {reviewsDetails.Reviews.rows.length > 0 ? (reviewsDetails.Reviews &&
                      <ReviewsCard
                        reviews={reviewsDetails.Reviews.rows}
                      />) : emptyReviews}
                  </ul>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BusinessProfile.contextTypes = {
  router: PropTypes.object.isRequired,
};

BusinessProfile.propTypes = {
  user: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  match: PropTypes.func.isRequired,
  business: PropTypes.object.isRequired,
  reviewsData: PropTypes.func.isRequired,
  deleteBusiness: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  postReviewAction: PropTypes.func.isRequired,
  getReviewsAction: PropTypes.func.isRequired,
  getOneBusinessAction: PropTypes.func.isRequired,
  deleteBusinessAction: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
  user: state.auth.user,
  deleteBusiness: state.deleteBusiness,
  business: state.allBusinesses.oneBusiness,
  reviewsData: state.allBusinesses.allReviews
});

export default connect(mapStateToProps, {
  getOneBusinessAction, deleteBusinessAction, addFlashMessage, getReviewsAction, postReviewAction
})(BusinessProfile);

