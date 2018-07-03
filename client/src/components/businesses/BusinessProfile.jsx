import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import images from '../../public/images/irokotv.jpg'
import { connect } from 'react-redux';
import { title, description, category, location } from './RegisterBusiness';
import { getOneBusinessAction, deleteBusinessAction } from '../../actions/businessActions';
import { addFlashMessage } from '../../actions/flashMessages';
import ReviewsCard from './ReviewsCards';
import { getReviewsAction, postReviewAction } from '../../actions/reviewsActions'

class BusinessProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      review: '',
      errors: [],
      isLoading: false
    }
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onDelete(event) {
    event.preventDefault();
    const { id } = this.props.match.params;
    this.props.deleteBusinessAction(id);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { id } = this.props.match.params;
    this.setState({ errors: [], isLodaing: true });
    this.props.postReviewAction(this.state, id)
      .then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'review added successfully'
        }
      );   
        this.props.getReviewsAction(this.props.match.params.id)
        this.setState({ review: '' });
      },
      (err) => {
        this.props.addFlashMessage({
        type: 'error',
        text: err.response.data.message
      })
    }
  );
}

 

  componentDidMount() {
    this.props.getOneBusinessAction(this.props.match.params.id)
    this.props.getReviewsAction(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {
    const { isDeleted, message, error, hasError } = nextProps.deleteBusiness;
    if (isDeleted) {
      this.props.addFlashMessage({
        type: 'success',
        text: `${message}`
      })
      this.context.router.history.push('/businessCatalog');
    }
    else if (!isDeleted && hasError) {
      this.props.addFlashMessage({
        type: 'error',
        text: `${error}`
      })
    }
  }
  
  
  
  render() {
    const { business, review, user, count } = this.props;
    if (!this.props.reviewsData.Reviews){
      return 'loading...'
    }
    // console.log(this.props.reviewsData.Reviews.count);

    
    return (
      <div className="container" >
        <div className="form-actions" />
        <div className="row">
          <div className="col-sm-4">
            <br />
            <div className="text-center">
              <img className="img img-fluid" src={business.image} alt="Card image cap" width="537.5" />
              <div className="form-group form-spacing">
                <label className="col-sm-6 control-label">
                  <h3>
                    <br />
                    <strong>{business.title}</strong>
                  </h3>
                </label>
              </div>
            </div>
          </div>
          <div className="col-sm-8 personal-info">
            <div className="form-profile" id="description">
              <h3>Business Profile</h3>
              <br />
            </div>
            <form className="form-horizontal" role="form">
              <div className="form-group form-spacing">
                <label className="col-sm-6 control-label">
                  <strong>Business Description:</strong> {business.description}
                </label>
              </div>
              <div className="form-group form-spacing">
              </div>
              <div className="form-group form-spacing">
                <label className="col-sm-6 control-label">
                  <strong>Business Category:</strong> {business.category}
                </label>
              </div>
              <div className="form-group form-spacing">
                <label className="col-sm-6 control-label">
                  <strong>reviews:</strong> 256 reviews
                </label>
              </div>
              <div className="form-group form-spacing">
                <label className="col-sm-6 control-label">
                  <strong>Business location:</strong> {business.location}
                </label>
              </div>
              <div className="form-group form-spacing">
                <label className="col-sm-6 control-label">
                  <strong>Business Email: </strong> {business.email}
                  <strong>
                    &nbsp;&nbsp;
                   </strong>
                </label>
              </div>
              { user.id === business.userId ?
                (<div className="form-group form-spacing">
                <label className="col-sm-3 control-label" />
                <div className="col-sm-8">
                  <Link to={`/editBusiness/${this.props.match.params.id}`}>
                    <button className="btn btn-primary" >
                      Edit Business
                  </button>
                  </Link>
                  <button
                    type="reset"
                    className="btn btn-danger"
                    id="btn-delete"
                    value="Delete Business"
                    onClick={this.onDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>) : null
            }
             { user.id !== business.userId ? (<form onSubmit={this.onSubmit}>
                <div className="form-group form-spacing row">
                  <div className="col-sm-8" id="description">
                    <textarea
                      name="review"
                      className="form-control"
                      id="exampleTextarea"
                      rows="3" placeholder="add a review"
                      value={this.state.review}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="form-group form-spacing">
                  <div className="col-sm-8">
                    <button
                      disabled={this.state.isLoading}
                      className="btn btn-primary"
                    >
                      Post Review
                  </button>
                  </div>
                </div>
    </form>) : null }
              <br />
              <div className="form-reviews" id="description-header">
                <h3>Reviews</h3>
              </div>
              <div className="edit-spacing" id="chat-cards-buttom-spacing">
                <ul className="list-unstyled">
                  {this.props.reviewsData.Reviews &&
                    <ReviewsCard
                      reviews={this.props.reviewsData.Reviews.rows}
                      />}
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

BusinessProfile.contextTypes = {
  router: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  business: state.oneBusiness,
  deleteBusiness: state.deleteBusiness,
  reviewsData: state.allReviews,
  user: state.auth.user
})

export default connect(mapStateToProps, { getOneBusinessAction, deleteBusinessAction, addFlashMessage, getReviewsAction, postReviewAction })(BusinessProfile);

