import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pagination from 'rc-pagination';
import { getReviewsAction } from '../../actions/reviewsActions';
import { getBusinessAction, getAllBusinessSearchAction } from '../../actions/businessActions';
import Cards from './cards';

class BusinessCatalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      presentPage: 1,
      limit: 0,
      count: 0,
      searchType: '',
      keyValue: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onChangepage = this.onChangepage.bind(this);
  }
  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onSearch(event) {
    event.preventDefault();
    const { searchType, keyValue } = this.state;
    if (!searchType || !keyValue) {
      this.props.getBusinessAction();
    }
    this.props.getAllBusinessSearchAction(searchType, keyValue)
  };


  onChangepage(page) {
    this.props.getBusinessAction().
      then(() => {
        const { presentPage, limit, count } = this.props.pagination;
        this.setState({
          count,
          limit,
          presentPage
        });
      });
  }

  // componentDidMount() {
  //   const { searchType, keyValue } = this.state;
  //   // this.props.getBusinessAction(searchType, keyValue)
  //   this.props.getBusinessAction()
  // }


  componentDidMount() {
    // this.props.getBusinessAction(searchType, keyValue)
    const { searchType, keyValue } = this.state;
    this.props.getBusinessAction().then(() => {
      const { presentPage, limit, count } = this.props.pagination;
      this.setState({
        presentPage,
        count,
        limit
      });
    });
  }



  render() {
    const allBusinesses = this.props.businesses;
    const { count, presentPage, limit } = this.state;
    const displayAllBusiness = allBusinesses.map((business) => {
      console.log(this.state.limit)
      return (
        <Cards
          key={business.id}
          id={business.id}
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
        {/* <div className="pagination-card btn1-spacing">
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
        </div> */}

        <div className="d-flex justify-content-center mt-5">
          <Pagination
            getSum={(sum, range) =>
              `${range[0]} - ${range[1]} of ${sum} items`
            }
            sum={count}
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
  getBusinessAction: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
  businesses: state.allBusinesses,
  reviewData: state.allReviews,
  pagination: state.allBusinesses.pagination
})

export default connect(mapStateToProps, { getBusinessAction, getReviewsAction, getAllBusinessSearchAction })(BusinessCatalog);

