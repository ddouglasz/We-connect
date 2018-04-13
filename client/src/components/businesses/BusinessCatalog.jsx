import React from 'react';
import { Link } from 'react-router-dom';

const BusinessCatalog = () => (
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
      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className=" img-zoom card-space">
          <Link to="/businessProfile" className="nav-link text">
          <img className="img img-fluid" src="resources/images/farmcrowdy.jpg" alt="Card image cap" width="537.5" />
         </Link>
          <div className="card-block">
            <h4 className="card-title detail-text">farm crowdy</h4>
            <p className="card-text detail-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text">
              <div className="icons ">
                <a href="businessProfile.html">
                  <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true"></i>
                  <strong>Find out more</strong>
                </a>
              </div>
              <div className="icons  ">
                <a href="businessCatalog.html">
                  <i className="fa fa-commenting-o" aria-hidden="true"></i>
                  <strong> 156 reviews</strong>
                </a>
              </div>
            </p>
            <small className="updated" id="updated-text">Last updated 4 mins ago</small>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className=" img-zoom card-space">
        <Link to="/businessProfile" className="nav-link text">
            <img className="img img-fluid" src="resources/images/irokotv.jpg" alt="Card image cap" width="537.5" />
          </Link>
          <div className="card-block">
            <h4 className="card-title detail-text">iroko tv</h4>
            <p className="card-text detail-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text">
              <div className="icons ">
                <a href="businessProfile.html">
                  <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true"></i>
                  <strong>Find out more</strong>
                </a>
              </div>
              <div className="icons  ">
                <a href="businessCatalog.html">
                  <i className="fa fa-commenting-o" aria-hidden="true"></i>
                  <strong> 156 reviews</strong>
                </a>
              </div>
            </p>
            <small className="updated" id="updated-text">Last updated 4 mins ago</small>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className=" img-zoom card-space">
        <Link to="/businessProfile" className="nav-link text">
            <img className="img img-fluid" src="resources/images/airbnb.jpg" alt="Card image cap" width="537.5" />
          </Link>
          <div className="card-block">
            <h4 className="card-title detail-text">airbnb</h4>
            <p className="card-text detail-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text">
              <div className="icons ">
                <a href="businessProfile.html">
                  <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true"></i>
                  <strong>Find out more</strong>
                </a>
              </div>
              <div className="icons  ">
                <a href="businessCatalog.html">
                  <i className="fa fa-commenting-o" aria-hidden="true"></i>
                  <strong> 156 reviews</strong>
                </a>
              </div>
            </p>
            <small className="updated" id="updated-text">Last updated 4 mins ago</small>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className=" img-zoom card-space">
          <Link to="/businessProfile" className="nav-link text">
          <img className="img img-fluid" src="resources/images/hotels.jpg" alt="Card image cap" width="537.5" /> 
        </Link>
          <div className="card-block">
            <h4 className="card-title detail-text">Hotels.ng</h4>
            <p className="card-text detail-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text">
              <div className="icons ">
                <a href="businessProfile.html">
                  <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true"></i>
                  <strong>find out more</strong>
                </a>
              </div>
              <div className="icons  ">
                <a href="businessCatalog.html">
                  <i className="fa fa-commenting-o" aria-hidden="true"></i>
                  <strong> 156 reviews</strong>
                </a>
              </div>
            </p>
            <small className="updated" id="updated-text">Last updated 4 mins ago</small>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className=" img-zoom card-space">
        <Link to="/businessProfile" className="nav-link text">
            <img className="img img-fluid" src="resources/images/Andeladevs.jpg" alt="Card image cap" width="537.5" />
          </Link>
          <div className="card-block">
            <h4 className="card-title detail-text">Andela</h4>
            <p className="card-text detail-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text">
              <div className="icons ">
                <a href="businessProfile.html">
                  <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true"></i>
                  <strong>find out more</strong>
                </a>
              </div>
              <div className="icons ">
                <a href="businessCatalog.html">
                  <i className="fa fa-commenting-o" aria-hidden="true"></i>
                  <strong> 156 reviews</strong>
                </a>
              </div>
            </p>
            <small className="updated" id="updated-text">Last updated 4 mins ago</small>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-sm-6 col-xs-12">
        <div className=" img-zoom card-space">
          <a className="cat-form" href="businessProfile.html">
            <img className="img img-fluid" src="resources/images/printivomug.jpg" alt="Card image cap" width="537.5" />
          </a>
          <div className="card-block">
            <h4 className="card-title detail-text">Printivo</h4>
            <p className="card-text detail-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text">
              <div className="icons ">
                <a href="businessProfile.html">
                  <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true"></i>
                  <strong>Find out more</strong>
                </a>
              </div>
              <div className="icons  ">
                <a href="businessCatalog.html">
                  <i className="fa fa-commenting-o" aria-hidden="true"></i>
                  <strong> 156 reviews</strong>
                </a>
              </div>
            </p>
            <small className="updated" id="updated-text">Last updated 4 mins ago</small>
          </div>
        </div>
      </div>
      <div className="col-lg-1"></div>
      <div className="pagination-card btn1-spacing">
        <nav aria-label="pages">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabindex="-1">Previous</a>
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

export default BusinessCatalog;
