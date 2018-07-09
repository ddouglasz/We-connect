import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import auth from '../../reducers/auth';
import { UserDashBoardAction, getAllBusinessSearchAction } from '../../actions/businessActions';
import Cards from './../businesses/cards.jsx';
import { currentUser } from './../../actions/authActions';
/**
   * @class UserProfile
   */
class UserProfile extends React.Component {
  /**
   * @description - business display form
   * @param {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      searchType: '',
      keyValue: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
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
  onSearch(event) {
    event.preventDefault();
    const { searchType, keyValue } = this.state;
    const userId = currentUser.userId;
    if (!searchType || !keyValue) {
      this.props.UserDashBoardAction();
    }
    this.props.getAllBusinessSearchAction(searchType, keyValue);
  }
  /**
   * @return {function} function
   */
  componentDidMount() {
    // const { searchType, keyValue } = this.state;

    // this.props.getBusinessAction(searchType, keyValue)
    this.props.UserDashBoardAction();
  }
  /**
   * @description - business display form
   * @param {Object} business
   * @return {function} function
   */
  render() {
    const allBusinesses = this.props.businesses;
    const displayAllBusiness = allBusinesses.map(business => (
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
    const { firstName, email } = this.props.userDetails;
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
              <form onSubmit={this.onSearch}>
                <div className="input-group input-search-field border-right=0" id="searchbar">
                  <span className="input-group-dropdown" id="searchField">
                    <select className="custom-select btn  searchbar-decors text-white dropdown-toggle" id="dropdownMenuButton" name="searchType" onChange={this.onChange} >
                      <option id="text-white" value=''>Choose</option>
                      <option value={this.state.location}>location</option>
                      <option value={this.state.category}>category</option>
                      <option value={this.state.name}>business name</option>
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

              <div className="text-center">
              <div className="profile-image">
                </div>
                <label>
                  {/* <strong>Name:</strong>{firstName} */}
             <p>   <strong>Email: </strong>{email}</p>
                </label>
              </div>
              <div className="form-group form-spacing">
                <hr/>
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
  UserDashBoardAction: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  businesses: state.getUserProfile.userProfile,
  userDetails: state.auth.user
});

export default connect(mapStateToProps, {
  UserDashBoardAction, getAllBusinessSearchAction
})(UserProfile);
