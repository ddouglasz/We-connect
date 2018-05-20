
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editBusinessAction, getOneBusinessAction }  from '../../actions/businessActions';
import { addFlashMessage } from '../../actions/flashMessages';
import classnames from 'classnames';


class EditBusiness extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.business.id,
            title: this.props.business.title,
            description : this.props.business.description,
            category: this.props.business.category,
            location: this.props.business.location,
            email: this.props.business.email,
            image: this.props.business.image,
            errors: [],
            isLoading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 
    }

    componentWillMount() {
         this.props.getOneBusinessAction(this.props.match.params.id);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({ errors: [], isLoading: true });
        this.props.editBusinessAction(this.state)
        .then(
            () => {
                // console.log('are you here');
                this.props.addFlashMessage({
                    type: 'success',
                    text: 'Business Edited successfully'
                })
                this.context.router.history.push('/businessCatalog')
            },
            (error) => this.setState({ errors: response.data.message, isLoading: false })
         );
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container" onSubmit={this.onSubmit}>
                <div className="form-actions2">
                    <h1>Edit a Business</h1>
                    
                {errors && <span className="help-block text-danger"><div className="form-action">{errors}</div></span>  }                                                      
                
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center">
                            <img src={require('../../public/images/irokotv.jpg')} className="img-rounded" id="profile-image" alt="chefchef" width="250" />
                            <h6>Upload a different photo...</h6>
                            <input
                             type="file" 
                             className="form-control btn-primary" 
                             name="image"
                             placeholder="company or firm"
                             value={this.state.image}
                             onChange={this.onChange}
                             />
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

EditBusiness.proptypes = {
    editBusinessAction: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
        business: state.oneBusiness
      })

EditBusiness.contextTypes = {
    router: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { editBusinessAction, getOneBusinessAction, addFlashMessage })(EditBusiness);
