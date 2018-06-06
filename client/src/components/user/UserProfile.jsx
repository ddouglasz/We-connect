import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserDashBoardAction, getAllBusinessSearchAction } from '../../actions/businessActions';
import Cards from './../businesses/cards';
import { currentUser } from './../../actions/authActions';


// const UserProfile = () => {
//   return (
//   <div className="container">
//       <div className="form-actions2">
//         <h1>Find all businesses created by Mr.steve</h1>
//       </div>
//       <hr />
//         <div className="row">
//           <div className="col-md-2">
            // <div className="text-center">
            //   <img src={require('../../public/images/profileGlyph.jpg')} className="img-rounded" id="profile-image" alt="chefchef" />
            //   <h6>Upload a different photo...</h6>
            //   <input type="file" className="form-control btn-primary" />
            // </div>
//             <div className="form-group form-spacing">
//               <hr />
//               <label>
//                 <strong>Full Name:</strong>Egiemeh Douglas
//               </label>
//               <h6>
//                 <strong>Bio:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quam repellat ab! Veritatis dolores illo optio totam minus tempore nesciunt quaerat, ad omnis, ex consequuntur quidem ipsum, accusantium enim quis recusandae et. Asperiores, nisi dolorum odio, minus quod tempore ut molestias eaque, doloribus nostrum architecto laborum officiis temporibus distinctio rem?{" "}
//               </h6>
//             </div>
//           </div>

//           <div className="col-md-10 personal-info">
//             <form className="form-horizontal" role="form">
//               <div className="body-cover">
//                 <div className="row">

//                   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
//                     <div className=" img-zoom card-space">
//                       <a className="cat-form" href="businessProfile.html">
//                         <img className="img img-fluid" src={require('../../public/images/farmcrowdy.jpg')} alt="Card image cap" width="537.5" />
//                       </a>
//                       <div className="card-block">
//                         <h4 className="card-title detail-text">
//                           farm crowdy
//                         </h4>
//                         <p className="card-text detail-text">
//                           This card has supporting text below as a natural
//                           lead-in to additional content.
//                         </p>
//                           <div className="icons ">
//                             <a href="businessProfile.html">
//                               <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true" />
//                               <strong>find out more</strong>
//                             </a>
//                           </div>
//                           <div className="icons  ">
//                             <a href="businessCatalog.html">
//                               <i className="fa fa-commenting-o" aria-hidden="true" />
//                               <strong> 156 reviews</strong>
//                             </a>
//                           </div>
//                         <small className="updated" id="updated-text">
//                           Last updated 4 mins ago
//                         </small>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
//                     <div className=" img-zoom card-space">
//                       <a className="cat-form" href="businessProfile.html">
//                         <img className="img img-fluid" src={require('../../public/images/irokotv.jpg')} alt="Card image cap" width="537.5" />
//                       </a>
//                       <div className="card-block">
//                         <h4 className="card-title detail-text">iroko tv</h4>
//                         <p className="card-text detail-text">
//                           This card has supporting text below as a natural
//                           lead-in to additional content.
//                         </p>
//                           <div className="icons ">
//                             <a href="businessProfile.html">
//                               <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true" />
//                               <strong>find out more</strong>
//                             </a>
//                           </div>
//                           <div className="icons  ">
//                             <a href="businessCatalog.html">
//                               <i className="fa fa-commenting-o" aria-hidden="true" />
//                               <strong> 156 reviews</strong>
//                             </a>
//                           </div>
//                         <small className="updated" id="updated-text">
//                           Last updated 4 mins ago
//                         </small>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
//                     <div className=" img-zoom card-space">
//                       <a className="cat-form" href="businessProfile.html">
//                         <img className="img img-fluid" src={require('../../public/images/airbnb.jpg')} alt="Card image cap" width="537.5" />
//                       </a>
//                       <div className="card-block">
//                         <h4 className="card-title detail-text">airbnb</h4>
//                         <p className="card-text detail-text">
//                           This card has supporting text below as a natural
//                           lead-in to additional content.
//                         </p>
//                           <div className="icons ">
//                             <a href="businessProfile.html">
//                               <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true" />
//                               <strong>find out more</strong>
//                             </a>
//                           </div>
//                           <div className="icons  ">
//                             <a href="businessCatalog.html">
//                               <i className="fa fa-commenting-o" aria-hidden="true" />
//                               <strong> 156 reviews</strong>
//                             </a>
//                           </div>
//                         <small className="updated" id="updated-text">
//                           Last updated 4 mins ago
//                         </small>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
//                     <div className=" img-zoom card-space">
//                       <a className="cat-form" href="businessProfile.html">
//                         <img className="img img-fluid" src={require('../../public/images/hotels.jpg')} alt="Card image cap" width="537.5" />
//                       </a>
//                       <div className="card-block">
//                         <h4 className="card-title detail-text">hotels.ng</h4>
//                         <p className="card-text detail-text">
//                           This card has supporting text below as a natural
//                           lead-in to additional content.
//                         </p>
//                           <div className="icons ">
//                             <a href="businessProfile.html">
//                               <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true" />
//                               <strong>find out more</strong>
//                             </a>
//                           </div>
//                           <div className="icons  ">
//                             <a href="businessCatalog.html">
//                               <i className="fa fa-commenting-o" aria-hidden="true" />
//                               <strong> 156 reviews</strong>
//                             </a>
//                           </div>
//                         <small className="updated" id="updated-text">
//                           Last updated 4 mins ago
//                         </small>
//                       </div>
//                     </div>
//                   </div>

//                  </div>
//               </div>
//             </form>
//             <div className="pagination-card btn1-spacing">
//               <nav aria-label="pages">
//                 <ul className="pagination">
//                   <li className="page-item disabled">
//                     <a className="page-link" href="#" tabIndex="-1">
//                       Previous
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       1
//                     </a>
//                   </li>
//                   <li className="page-item active">
//                     <a className="page-link" href="#">
//                       2
//                       <span className="sr-only">(current)</span>
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       3
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       Next
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       <hr />
// </div>
// );
// };

// export default UserProfile;


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
  this.setState({[event.target.name]: event.target.value });
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
    console.log(this.props.businesses)
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
            <h1 className="display-3">Welcome {this.state.image}</h1>
          </div>
          <div className="row ">
          
            <div className="col-sm-4 col-md-4 col-lg-4 cat-image">

            <div className="text-center">
              <img src={require('../../public/images/profileGlyph.jpg')} className="img-rounded" id="profile-image" alt="chefchef" />
             </div>
            </div>
            <div className="col-sm-4 cat-image">
              <form   onSubmit={this.onSearch}>
                <div className="input-group input-search-field border-right=0" id="searchbar">
                  <span className="input-group-dropdown" id="searchField">
                    <select className="custom-select btn  searchbar-decors text-white dropdown-toggle" id="dropdownMenuButton"  name="searchType" onChange={this.onChange} >
                      <option id="text-white" value=''>Choose</option>
                      <option value={this.state.location}>location</option>
                      <option value={this.state.category}>category</option>
                      <option value={this.state.name}>business name</option>
                    </select>
                  </span>
                  <input type="text" className="form-control SearchBar" id="input-search" placeholder="Direct search" name="keyValue" onChange={this.onChange}/>
                  <span className="input-group-btn">
                    <button className="btn  searchbar-decors btn-search"  id="searchField">
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
        <div className="form-action">
          <h3 className="center-align">All Businesses you added</h3>
        </div>
        <div className="body-cover">
          <div className="row">
            {allBusinesses && displayAllBusiness}
            
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
// console.log(currentUser);
const mapStateToProps = state => ({
  businesses: state.getUserProfile.userProfile,
})

export default connect(mapStateToProps, { UserDashBoardAction, getAllBusinessSearchAction })(UserProfile);
