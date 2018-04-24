import React from 'react';
import {link} from 'react-router-dom';

const RegisterBusiness = () => {
    return(
        <div className="container">
                <div className="form-actions2">
                    <h1>Edit or Add a new Business</h1>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center">
                            <img src={require('../../public/images/irokotv.jpg')} className="img-rounded" id="profile-image" alt="chefchef" width="250" />
                            <h6>Upload a different photo...</h6>
                            <input type="file" className="form-control btn-primary" />
                        </div>
                    </div>
        
                    <div className="col-md-9 personal-info">
                        <h3>Business Info</h3>
        
                        <form className="form-horizontal" role="form">
                            <div className="form-group form-spacing">
                                <label className="col-sm-3 control-label"><strong>Business Name:</strong></label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text"   placeholder="company or firm" />
                                </div>
                            </div>
                            <div className="form-group form-spacing">
                                <label className="col-sm-3 control-label"><strong>Business category:</strong></label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text"  placeholder="type of business" />
                                </div>
                            </div>
                            <div className="form-group form-spacing">
                                <label className="col-sm-3 control-label" ><strong>Business description:</strong></label>
                                <div className="form-group form-spacing row">
                                        <label htmlFor="smFormGroupInput" className="col-sm-12 col-form-label col-form-label-sm"></label>
                                        <div className="col-sm-8" id="description">
                                          <textarea className="form-control" id="exampleTextarea" rows="4" placeholder="add brief summary of business content here..."></textarea>
                                        </div>
                                      </div>
                            </div>
                            <div className="form-group form-spacing">
                                <label className="col-sm-3 control-label"><strong>Business location:</strong></label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text"  placeholder="location" />
                                </div>
                            </div>
                            <div className="form-group form-spacing">
                                <label className="col-md-3 control-label"><strong>Email:</strong></label>
                                <div className="col-sm-8">
                                    <input className="form-control" type="text"   placeholder="@email.com" />
                                </div>
                            </div>
                            <div className="form-group btn1-spacing">
                                <label className="col-md-3 control-label"><strong>Add social network:</strong></label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text"  placeholder="@social" />
                                </div>
                            </div>
                            <div className="form-group btn1-spacing">
                                <label className="col-md-3 control-label"></label>
                                <div className="col-md-8 edit-spacing">
                                   <div className="btn-toolbar ">
                                    <a className="btn btn-primary" href="businessProfile.html" role="button"> save changes</a>
                                    <input type="reset" className="btn btn-danger" value="Cancel" id= "cancel-reg" href="businessProfile.html" />
                               </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


    );
}

export default RegisterBusiness;