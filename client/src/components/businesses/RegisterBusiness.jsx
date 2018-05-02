import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RegBusAction } from "../../actions/businessActions";
import classnames from 'classnames';


class RegisterBusiness extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            category: '',
            location: '',
            email: '',
            image: '',
            errors: [],
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ errors: [], isLoading: true });
        this.props.RegBusAction(this.state).then(
            () => {
                this.props.addFlashMessage({
                    type: 'success',
                    text: 'Business added successfully'
                })
                this.context.router.history.push('/businessProfile')
            },
            ({ response }) => this.setState({ errors: response.data.message, isLoading: false })
        );
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container" onSubmit={this.onSubmit}>
                <div className="form-actions2">
                    <h1>Edit or Add a new Business</h1>
                    
                {errors && <span className="help-block text-danger"><div className="form-action">{errors}</div></span>  }                                                      
                
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
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="title"
                                        placeholder="company or firm"
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group form-spacing">
                                <label className="col-sm-3 control-label"><strong>Business category:</strong></label>
                                <div className="col-sm-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="category"
                                        placeholder="type of business"
                                        value={this.state.category}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group form-spacing">
                                <label className="col-sm-3 control-label" ><strong>Business description:</strong></label>
                                <div className="form-group form-spacing row">
                                    <label htmlFor="smFormGroupInput" className="col-sm-12 col-form-label col-form-label-sm"></label>
                                    <div className="col-sm-8" id="description">
                                        <textarea
                                            className="form-control"
                                            id="exampleTextarea"
                                            rows="4"
                                            name="description"
                                            placeholder="add brief summary of business content here..." value={this.state.description}
                                            value={this.state.description}
                                            onChange={this.onChange}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group form-spacing">
                                <label className="col-sm-3 control-label"><strong>Business location:</strong></label>
                                <div className="col-sm-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="location"
                                        placeholder="location"
                                        value={this.state.location}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group form-spacing">
                                <label className="col-md-3 control-label"><strong>Email:</strong></label>
                                <div className="col-sm-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="email"
                                        placeholder="@email.com"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group btn1-spacing">
                                <label className="col-md-3 control-label"><strong>Add social network:</strong></label>
                                <div className="col-md-8">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="@social" />
                                </div>
                            </div>
                            <div className="form-group btn1-spacing">
                                <label className="col-md-3 control-label"></label>
                                <div className="col-md-8 edit-spacing">
                                    <div className="btn-toolbar ">
                                        <button disabled={this.state.isLoading}
                                            className="btn btn-primary"
                                            href="businessProfile.html"
                                            role="button">
                                            save
                                    </button>
                                        <button type="reset" className="btn btn-danger" value="Cancel" id="cancel-reg" href="businessProfile.html">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

RegisterBusiness.proptypes = {
    RegBusAction: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

RegisterBusiness.contextTypes = {
    router: PropTypes.object.isRequired
}

export default RegisterBusiness;
