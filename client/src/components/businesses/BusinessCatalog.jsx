import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBusinessAction } from '../../actions/businessActions';
import Cards from './cards';

class BusinessCatalog extends React.Component {
constructor(props){
super(props);
}
  componentDidMount() {
    this.props.getBusinessAction()
  }
  render() {
    const allBsuinesses = this.props.businesses;
    const displayAllBusiness = allBsuinesses.map((business) => {
      return(
        <Cards
        Key={business}
        id={business.id}
        name={business.title}
        description={business.description}
        category={business.category}
        />
      )
    })
    return (
      <div className="catalog-cover">
        <div className="jumbotron2 jumbotron-fluid home-wrapper-catalog">
          <div className="container-overlay">
            <h1 className="display-3">Business Catalog</h1>
          </div>
          <div className="row ">
            <div className="col-sm-4 col-md-4 col-lg-4 cat-image">
            </div>
            <div className="col-sm-4 cat-image">
              <form>
                <div className="input-group input-search-field border-right=0" id="searchbar">
                  <span className="input-group-dropdown" id="searchField">
                    <div className="dropdown">
                      <button className="btn  searchbar-decors text-white btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <a id="text-white">select:</a>
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Location</a>
                        <a className="dropdown-item" href="#">Category</a>
                      </div>
                    </div>
                  </span>
                  <input type="text" className="form-control SearchBar" id="input-search" placeholder="Direct search" />
                  <span className="input-group-btn">
                    <button className="btn  searchbar-decors btn-search" type="button" id="searchField">
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
          <h3 className="center-align">Popular Businesses</h3>
        </div>
        <div className="body-cover">
          <div className="row">
               { allBsuinesses && displayAllBusiness }
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
        </div>
      </div>
    );
  }
}
BusinessCatalog.propTypes = {
   getBusinessAction: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
  businesses: state.allBusinesses,
})

export default connect(mapStateToProps, { getBusinessAction })(BusinessCatalog);

