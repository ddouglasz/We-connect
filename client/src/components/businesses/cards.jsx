import React from 'react';
import {Link} from 'react-router-dom';
import Truncate from 'react-truncate';
import TextTruncate from 'react-text-truncate';

const Cards = ({ name, description, category, id, image }) => {
return (
    <div className="col-md-4 col-sm-6 col-xs-12">
        <div className=" img-zoom card-space">
                 <img className="img img-fluid  " src={image} alt="Card image cap" width="537.5" />
             <div className="card-block">
                <h4 className="card-title detail-text">{name}</h4>
                <TextTruncate className="card-title detail-text" text={description} lines={1}/>
                <hr/>
                <h6 className="card-title detail-text">Category: {category}</h6>
                <div className="icons ">
                    <Link to={`/businessProfile/${id}`}>
                         <i className="fa fa-info-circle fa-lg fa-fw" aria-hidden="true"></i>
                        <strong>Find out more</strong>
                    </Link>
                </div>
                <div className="icons">
                    <a href="#">
                        <i className="fa fa-commenting-o" aria-hidden="true"></i>
                        <strong> 156 reviews</strong>
                    </a>
                </div>
                <small className="updated" id="updated-text">Last updated 4 mins ago</small>
            </div>
        </div>
    </div>
 );
}

export default Cards;