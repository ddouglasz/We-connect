import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editBusinessAction, getOneBusinessAction } from '../../../actions/businessActions';
import { addFlashMessage } from '../../../actions/flashMessages';
// import classnames from 'classnames';

/**
   * @description - Edit business component page
   * @class EditBusiness
   */
class EditBusiness extends React.Component {
  /**
         * @description - business display form
         * @param {Object} props
         * @param {object} object
         */
  constructor(props) {
    super(props);

    const {
      id, title, description, category, location, Email, image
    } = this.props.business;

    this.state = {
      id,
      title,
      description,
      category,
      location,
      Email,
      image,
      errors: [],
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  /**
     * @return {function} function
     */
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getOneBusinessAction(id);
  }

  /**
     * @param {Object} event
     * @return {function} function
     */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
     * @param {Object} event
     * @return {function} function
     */
  onSubmit(event) {
    const { id } = this.props.match.params;
    event.preventDefault();
    this.setState({ errors: [], isLoading: true });
    this.props.editBusinessAction(this.state)
      .then(() => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'Business Edited successfully'
        });
        this.context.router.history.push(`/BusinessProfile/${id}`);
      });
  }
  /**
 * @param {array} errors
 * @return {function} function
 */
  render() {

    const { title, description, category, location, isLoading, email, image, errors } = this.state;
    const { onChange, onSubmit } = this;
    // const { errors } = this.state;

    return (
            <div className="container" onSubmit={onSubmit}>
                <div className="form-actions2">
                    <h1>Edit a Business</h1>

                    {errors && <span className="help-block text-danger"><div className="form-action">{errors}</div></span>}

                </div>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center">
                            <img defaultValue={image} className="img-rounded" id="profile-image" alt="chefchef" width="250" />
                            <h6>Upload a different photo...</h6>
                            <input
                                type="file"
                                className="form-control btn-primary"
                                name="image"
                                placeholder="company or firm"
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
                                        value={title}
                                        onChange={onChange}
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
                                        value={category}
                                        onChange={onChange}
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
                                            placeholder="add brief summary of business content here..."
                                            value={description}
                                            onChange={onChange}
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
                                        value={location}
                                        onChange={onChange}
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
                                        value={email}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group btn1-spacing">
                                <label className="col-md-3 control-label"></label>
                                <div className="col-md-8 edit-spacing">
                                    <div className="btn-toolbar ">
                                        <button
                                            disabled={isLoading}
                                            className="btn btn-primary"
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

EditBusiness.propTypes = {
  editBusinessAction: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  business: PropTypes.array.isRequired,
  getOneBusinessAction: PropTypes.func.isRequired,
  match: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  business: state.allBusinesses.oneBusiness
});

EditBusiness.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {
  editBusinessAction,
  getOneBusinessAction,
  addFlashMessage
})(EditBusiness);
