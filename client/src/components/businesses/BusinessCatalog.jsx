import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from 'rc-pagination';
import Cards from './cards.jsx';
import { getReviewsAction } from '../../actions/reviewsActions';
import { getBusinessAction, getAllBusinessSearchAction } from '../../actions/businessActions';

/**
   * @description - returns business cards on the catalog page
   * @class BusinessCatalog
   */
class BusinessCatalog extends React.Component {
  /**
   * @description - business display form
   * @param {Object} props
   * @param {object} object
   */
  constructor(props) {
    super(props);
    this.state = {
      presentPage: 1,
      limit: 0,
      count: 0,
      searchType: '',
      keyValue: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onChangepage = this.onChangepage.bind(this);
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
    if (!searchType || !keyValue) {
      this.props.getBusinessAction();
    }
    this.props.getAllBusinessSearchAction(searchType, keyValue);
  }
  /**
   * @param {number} page
   * @return {function} function
   */
  onChangepage(page) {
    this.props.getBusinessAction(page)
      .then(() => {
        const { presentPage, limit, count } = this.props.pagination;
        this.setState({
          count,
          limit,
          presentPage
        });
      });
  }
  /**
   * @return {function} function
   */
  componentDidMount() {
    this.props.getBusinessAction()
      .then(() => {
        const { presentPage, limit, count } = this.props.pagination;
        this.setState({
          presentPage,
          count,
          limit
        });
      });
  }
  /**
   * @param {object} business
   * @return {function} function
   */
  render() {
    const allBusinesses = this.props.businesses;
    const { count, presentPage, limit } = this.state;
    const displayAllBusiness = allBusinesses.map(business => (
      <Cards
      key={business.id}
      id={business.id}
      name={business.title}
      image={business.image}
      description={business.description}
      category={business.category}
      createdAt={business.createdAt}
      />
    ));

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
              <form onSubmit={this.onSearch}>
                <div className="input-group input-search-field border-right=0" id="searchbar">
                  <span className="input-group-dropdown" id="searchField">
                    <select className="custom-select btn  searchbar-decors text-white dropdown-toggle" id="dropdownMenuButton" name="searchType" onChange={this.onChange} >
                      <option id="text-white" value=''>Choose</option>
                      <option value={this.state.location}>location</option>
                      <option value={this.state.category}>category</option>
                      <option value={this.state.title}>title</option>
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
        <div className="form-action">
          <h3 className="center-align">Popular Businesses</h3>
        </div>
        <div className="body-cover">
          <div className="row">
            {allBusinesses && displayAllBusiness}
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Pagination
            showTotal={(total, range) =>
              `${range[0]} - ${range[1]} of ${total} items`
            }
            total={count}
            pageSize={limit}
            current={presentPage}
            onChange={this.onChangepage}
          />
        </div>

      </div>

    );
  }
}

BusinessCatalog.propTypes = {
  getAllBusinessSearchAction: PropTypes.func.isRequired,
  getBusinessAction: PropTypes.func.isRequired,
  presentPage: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired,
  businesses: PropTypes.array.isRequired,
  limit: PropTypes.object.isRequired,
  count: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  businesses: state.allBusinesses.businesses,
  pagination: state.allBusinesses.pagination
});


export default connect(mapStateToProps, {
  getBusinessAction,
  getReviewsAction,
  getAllBusinessSearchAction
})(BusinessCatalog);
