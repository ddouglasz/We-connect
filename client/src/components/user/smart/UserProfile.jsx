import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cards from '../../businesses/presentational/cards.jsx';
import { UserDashBoardAction, getAllBusinessSearchAction, editUserProfile } from '../../../actions/businessActions';
import { addFlashMessage } from '../../../actions/flashMessages';

/**
   * @class UserProfile
   */
export class UserProfile extends React.Component {
  /**
   * @description - business display form
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    const { firstName, lastName, bio } = this.props.userDetails;

    this.state = {
      firstName,
      lastName,
      bio,
      errors: [],
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  /**
   * @param {Object} event
   * @return {function} function
   */
  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
     * @param {Object} event
     * @return {function} function
     */
  onSubmit(event) {
    event.preventDefault();
    this.setState({ errors: [], isLoading: true });

    // console.log(this.state);
    this.props.editUserProfile(this.state)
      .then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'User updated successfully'
        });
        document.getElementById('closeEdit').click();
        this.setState({ errors: [], isLoading: false });
      });
  }
  /**
   * @return {function} function
   */
  componentDidMount() {
    this.props.UserDashBoardAction();
  }
  /**
   * @description - business display form
   * @param {Object} business
   * @return {function} function
   */
  render() {
    const {
      firstName,
      lastName,
      bio
    } = this.props.userDetails;

const { location, category, name } = this.state;

    const {
      Businesses
    } = this.props.userData;
    const allBusinesses = Businesses;
    const displayAllBusiness = allBusinesses && allBusinesses.map(business => (
      <Cards
        key={business.id}
        id={business.id}
        userId={business.userId}
        name={business.title}
        image={business.image}
        description={business.description}
        category={business.category}
      />
    ));
    return (
      <div className="catalog-cover">
        <div className="jumbotron2 jumbotron-fluid home-wrapper-catalog">
          <div className="container-overlay">
            <h1 className="display-3">Welcome</h1> <h3>{firstName}!</h3>
          </div>
          <div className="row ">
            <div className="col-sm-4 col-md-4 col-lg-4 cat-image">
            </div>
            <div className="col-sm-4 cat-image">
              {/* <form onSubmit={this.onSearch}> */}
              <form>
                <div className="input-group input-search-field border-right=0" id="searchbar">
                  <span className="input-group-dropdown" id="searchField">
                    <select className="custom-select btn  searchbar-decors text-white dropdown-toggle" id="dropdownMenuButton" name="searchType" onChange={this.onChange} >
                      <option id="text-white" value=''>Choose</option>
                      <option value={location}>location</option>
                      <option value={category}>category</option>
                      <option value={name}>business name</option>
                    </select>
                  </span>
                  <input type="text" className="form-control SearchBar" id="input-search" placeholder="Direct search" name="keyValue" onChange={this.onChange} />
                  <span className="input-group-btn">
                    <button className="btn  searchbar-decors btn-search" id="searchField">
                      <strong className="searchbtntext">
                        <a id="text-white">Search</a>
                      </strong>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>


        <div className="container-fluid body-cover">
          <div className="text" id="profile-details">
            <label>
              <strong>First Name: </strong>{firstName} <br />
              <strong>Last Name: </strong> {lastName}
            </label>
          </div>

          {/* Edit user modal START............................................. */}

          <button
            type="button"
            className="edit-userProfile btn text-white text-center pull-right"
            data-toggle="modal"
            id="editProfile-btn"
            data-target="#editUserProfileModal"
          >
            Edit Profile
                </button>
          <div className="modal fade" id="editUserProfileModal" tabIndex="-1" role="dialog" aria-labelledby="editUserProfileModal-Label" aria-hidden="true">
            <form onSubmit={this.onSubmit}>
              <div className="modal-dialog" role="document">
                <div className="modal-content" >
                  <div className="modal-header" >
                    <h5 className="modal-title" id="editUserProfileModal-Label">Edit your Profile</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      id="closeEdit"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                      <div className="form-group">
                        <label htmlFor="first-name" className="col-form-label">First Name:</label>
                        <input
                          className="form-control"
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="firstName"
                          value={this.state.firstName}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="last-name" className="col-form-label">Last Name:</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          placeholder="lastName"
                          value={this.state.lastName}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="bio-text" className="col-form-label">Bio:</label>
                        <textarea
                          className="form-control"
                          id="bio-text"
                          name="bio"
                          placeholder="bio"
                          value={this.state.bio}
                          onChange={this.onChange}
                        >
                        </textarea>
                      </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                    >
                      Close
                     </button>
                     <input
                      disabled={this.state.isLoading}
                      type="submit"
                      className="btn fa fa-send text-white"
                      id="save-edit-profile"
                      role="button"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* END of modal .................................................... */}

          <p className="bio-text"> <strong>Bio: </strong>{bio}</p>
          <div className="form-group form-spacing">
            <hr />
            <div className="form-action">
              <h3 className="center-align">Find all Businesses you added here</h3>
            </div>
            <h6>
            </h6>
            <div className="col-sm-8 col-md-12  " >
              <div className="row">
                {allBusinesses && displayAllBusiness}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
UserProfile.propTypes = {
  UserDashBoardAction: PropTypes.func.isRequired,
  getAllBusinessSearchAction: PropTypes.func.isRequired,
  businesses: PropTypes.func.isRequired,
  userDetails: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  userData: state.allBusinesses.userProfile,
  userDetails: state.auth.user
});

export default connect(mapStateToProps, {
  UserDashBoardAction, getAllBusinessSearchAction, editUserProfile, addFlashMessage
})(UserProfile);
