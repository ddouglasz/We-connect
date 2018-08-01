import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React from 'react';
import RegisterBusiness from '../../businesses/smart/RegisterBusiness.jsx';
import { registerBusinessAction, editBusinessAction } from '../../../actions/businessActions';
import { addFlashMessage } from '../../../actions/flashMessages';

/**
   * @description - register business child component
   * @class RegisterBusinessPage
   */
export class RegisterBusinessPage extends React.Component {
/**
   * @param {object} business
   * @return {function} function
   */
  render() {
    const {
      registerBusinessAction, addFlashMessage, editBusinessAction, business
    } = this.props;
    // console.log(this.props)
    return (
      <div>
        <RegisterBusiness
          editBusinessAction={editBusinessAction}
          registerBusinessAction={registerBusinessAction}
          addFlashMessage={addFlashMessage}
          business={business}
        />
      </div>
    );
  }
}

RegisterBusinessPage.propTypes = {
  registerBusinessAction: PropTypes.func.isRequired,
  editBusinessAction: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};
/**
   * @param {object} state
   * @param {object} props
   * @return {function} function
   */
function mapStateToProps(state, props) {
  if (props.match.params) {
    return {
      business: state.oneBusiness
    };
  }
  return { business: null };
}

export default connect(mapStateToProps, {
  registerBusinessAction,
  editBusinessAction,
  addFlashMessage
})(RegisterBusinessPage);
