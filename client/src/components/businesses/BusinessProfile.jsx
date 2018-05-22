import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import images from '../../public/images/irokotv.jpg'
import { connect } from 'react-redux';
import { title, description, category, location } from './RegisterBusiness';
import { getOneBusinessAction, deleteBusinessAction } from '../../actions/businessActions';
import { addFlashMessage } from '../../actions/flashMessages';
import ReviewsCard from './ReviewsCards';
import { getReviewsAction } from '../../actions/reviewsActions'

class BusinessProfile extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete(event) {
    event.preventDefault();
    const { id } = this.props.match.params;
    this.props.deleteBusinessAction(id);
  }
  componentDidMount() {
    this.props.getOneBusinessAction(this.props.match.params.id)
    this.props.getReviewsAction()
  }
  componentWillReceiveProps(nextProps){
    const { isDeleted, message, error, hasError } = nextProps.deleteBusiness;
    if(isDeleted){
      this.props.addFlashMessage({
        type: 'success',
        text: `${message}`
    })
    this.context.router.history.push('/businessCatalog');
    }
    else if(!isDeleted && hasError){
      this.props.addFlashMessage({
        type: 'error',
        text: `${error}`
    })
    // this.context.router.history.push('/businessProfile')
    }
  }


  render() {
    // const allReviews = this.props
    const { business } = this.props;
    return (
      <div className="container">
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
              <div className="form-group form-spacing">
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
              </div>
              <div className="form-group form-spacing row">
                <label htmlFor="smFormGroupInput" className="col-sm-12 col-form-label col-form-label-sm" />
                <div className="col-sm-8" id="description">
                  <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="add a review" />
                </div>
              </div>
              <div className="form-group form-spacing">
                <label className="col-sm-3 control-label" />
                <div className="col-sm-8">
                  <a className="btn btn-primary" href="businessProfile.html" role="button">
                    Post Review
                  </a>
                </div>
              </div>
              <br />
              <div className="form-reviews" id="description-header">
                <h3>Reviews</h3>
              </div>
              <div className="edit-spacing" id="chat-cards-buttom-spacing">
                <ul className="list-unstyled">
                  < ReviewsCard 
                  reviews={business.review}
                  />
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
  deleteBusiness: state.deleteBusiness
})

export default connect(mapStateToProps, { getOneBusinessAction, deleteBusinessAction, addFlashMessage, getReviewsAction })(BusinessProfile);

