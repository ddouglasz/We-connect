import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';
import moment from 'moment';

const Cards = ({
  name, description, category, id, image, createdAt
}) => (
    <div className="col-md-4 col-sm-6 col-xs-12 business-card">
        <div className=" img-zoom card-space">
        <div className="image-style" id="image-style1">
                 <img className="img img-fluid  " src={image} alt="Card image cap" width="537.5" />
                 </div>
             <div className="card-block">
                <h4 className="card-title detail-text">{name}</h4>
                <TextTruncate className="card-title detail-text" text={description} lines={1}/>
                <hr/>
                <h6 className="card-title detail-text">Category: {category}</h6>
                <small className="updated" id="updated-text">
                   <a>Created On:</a> {moment(createdAt).format('MMMM Do YYYY')}
                </small>
                <div className="icons ">
                    <Link to={`/businessProfile/${id}`} id="find-one-business">
                         <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true" id="find-one-business1"></i>
                        <strong>Find out more</strong>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

Cards.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Cards;
