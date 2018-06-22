import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserDashBoardAction, getAllBusinessSearchAction } from '../../actions/businessActions';
import Cards from './../businesses/cards';
import { currentUser } from './../../actions/authActions';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: '',
      keyValue: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onSearch(event) {
    event.preventDefault();
    const { searchType, keyValue } = this.state;
    const userId = currentUser.userId;
    console.log(currentUser);
    if (!searchType || !keyValue) {
      this.props.UserDashBoardAction();
    }
    this.props.getAllBusinessSearchAction(searchType, keyValue)
  };

  componentDidMount() {
    // const { searchType, keyValue } = this.state;

    // this.props.getBusinessAction(searchType, keyValue)
    this.props.UserDashBoardAction()
  }

  render() {
    const allBusinesses = this.props.businesses;
    const displayAllBusiness = allBusinesses.map((business) => {
      return (
        <Cards
          key={business.id}
          id={business.id}
          userId={business.userId}
          name={business.title}
          image={business.image}
          description={business.description}
          category={business.category}
        />
      )
    })
    return (


      <div className="catalog-cover">
        <div className="jumbotron2 jumbotron-fluid home-wrapper-catalog">
          <div className="container-overlay">
            <h1 className="display-3">Welcome {this.state.name}</h1>
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
          {/* <div className="row"> */}

            {/* <div className="col-sm-3 col-md-2 user-details-cover"> */}

              <div className="text-center">
              <div className="profile-image">
                <img src={require('../../public/images/profileGlyph.jpg')} className="img-rounded" id="profile-image" alt="chefchef" />
                {/* <h6>Upload a different photo...</h6> */}
                {/* <input type="file" className="form-control btn-primary" /> */}
                </div>
                <label>
                  <strong>Name:</strong>Douglas
             <p>   <strong>Email: </strong>Name@email.com</p>
                </label>
              </div>
              <div className="form-group form-spacing">
                <hr/>
                <div className="form-action">
          <h3 className="center-align">All Businesses you added</h3>
        </div>
                <h6>
                </h6>
              {/* </div> */}
            {/* </div> */}


            <div className="col-sm-8 col-md-12  " >
              <div className="row">
              {allBusinesses && displayAllBusiness}
            </div>
            </div>
          </div>
        </div>

        <div className="pagination-card btn1-spacing">
          <nav aria-label="pages">
            <ul className="pagination">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">Previous</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">1</a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">2
                <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>





      </div>
    );
  }
}
UserProfile.propTypes = {
  UserDashBoardAction: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  businesses: state.getUserProfile.userProfile,
})

export default connect(mapStateToProps, { UserDashBoardAction, getAllBusinessSearchAction })(UserProfile);
