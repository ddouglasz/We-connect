import React from 'react';
import { PropTypes } from 'prop-types';
import RegisterBusiness from '../businesses/RegisterBusiness';
import { connect } from 'react-redux';
import { registerBusinessAction, editBusinessAction } from '../../actions/businessActions';
import { addFlashMessage } from '../../actions/flashMessages';

/**
 * Class component for Login page
*/
class RegisterBusinessPage extends React.Component {
    render() {
        const { registerBusinessAction, addFlashMessage, editBusinessAction, business } = this.props;
        return (
            <RegisterBusiness 
                editBusinessAction={editBusinessAction} 
                registerBusinessAction={registerBusinessAction} 
                addFlashMessage={addFlashMessage} 
                business={business}
            />
        );
    }
}

RegisterBusinessPage.propTypes = {
    registerBusinessAction: PropTypes.func.isRequired,
    editBusinessAction: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
     
    if (props.match.params) {       
        return {
            business: state.oneBusiness
        }
    }
    return { business: null}
}

export default connect(mapStateToProps, { registerBusinessAction, editBusinessAction, addFlashMessage })(RegisterBusinessPage);
