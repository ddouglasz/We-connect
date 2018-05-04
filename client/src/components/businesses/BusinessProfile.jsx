import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../public/images/irokotv.jpg'

const BusinessProfile = () => {
  return (
    <div className="container">
      <div className="form-actions" />
      <div className="row">
        <div className="col-sm-4">
          <br />
          <div className="text-center">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner profile-images" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid" src={require('../../public/images/irokotv2.jpg')} alt="First slide" id="profile-image1" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={require('../../public/images/iroko960.jpg')} alt="Second slide" id="profile-image2" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={require('../../public/images/irokotv1.jpg')} alt="Third slide" id="profile-image3" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            <div className="form-group form-spacing">
              <label className="col-sm-6 control-label">
                <h3>
                  <br />
                  <strong>Iroko tv</strong>
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
                <strong>Business Description:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit unde necessitatibus eligendi facilis accusamus magnam ducimus, at mollitia maiores inventore cumque neque nobis! Blanditiis perspiciatis ex, ipsam iure voluptate quo sunt rem, dignissimos, quos minima at quisquam quidem laborum obcaecati illo. Sit libero deserunt error rem tempora cumque quaerat earum!
                </label>
            </div>
            <div className="form-group form-spacing">
              <label className="col-sm-6 control-label">

                <strong>Business Added by:</strong>
                {/* <Link to="#" className="user-profile-link"> */}
                  <span> @Mr.steve</span>
                {/* </Link> */}
              </label>

            </div>
            <div className="form-group form-spacing">
              <label className="col-sm-6 control-label">
                <strong>Business Category:</strong> Online entertainment
                </label>
            </div>
            <div className="form-group form-spacing">
              <label className="col-sm-6 control-label">
                <strong>reviews:</strong> 256 reviews
                </label>
            </div>
            <div className="form-group form-spacing">
              <label className="col-sm-6 control-label">
                <strong>Business location:</strong> Lagos
                </label>
            </div>
            <div className="form-group form-spacing">
              <label className="col-sm-6 control-label">
                <strong>Social network links:</strong>
                <strong>
                  &nbsp;&nbsp;
                    <a href="#">
                    <i className="fa fa-twitter    big-icon" id="twitter" aria-hidden="true" />
                  </a>
                  &nbsp;&nbsp;
                    <a href="#">
                    <i className="fa fa-linkedin   big-icon" id="linkedin" aria-hidden="true" />
                  </a>
                  &nbsp;&nbsp;
                    <a href="#">
                    <i className="fa fa-facebook   big-icon" id="facebook" aria-hidden="true" />
                  </a>
                </strong>
              </label>
            </div>
            <div className="form-group form-spacing">
              <label className="col-sm-3 control-label" />
              <div className="col-sm-8">
                <button className="btn btn-primary" href="manageBusiness.html">
                  Edit Business
                  </button>
                <button type="reset" className="btn btn-danger" id="btn-delete" value="Delete Business" >
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
                <li className="media">
                  <img className="d-flex mr-3" id="reviews-image" src={require('../../public/images/bean.jpg')} alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                <li className="media my-4">
                  <img className="d-flex mr-3" id="reviews-image" src={require('../../public/images/profileGlyph.jpg')} alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                <li className="media">
                  <img className="d-flex mr-3" id="reviews-image" src={require('../../public/images/beardedsmiley.jpg')} alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">List-based media object</h5>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BusinessProfile; 