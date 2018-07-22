import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import FlashMessage from './FlashMessage.jsx';
import { deleteFlashMessage } from '../../actions/flashMessages';
/**
 * @class FlashMessage
*/
class FlashMessagesList extends React.Component {
  /**
 * @description Class component for Sogn up form
 * @param { object } message
 * @return { object } object
*/
  render() {
    const messages = this.props.messages.map(message =>
           <FlashMessage
            Key={message.id}
            message={message} deleteFlashMessage={this.props.deleteFlashMessage}
            />);
    return (
            <div>
                {messages}
            </div>
    );
  }
}


FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
};

/**
 * @description Class component for Sogn up form
 * @param { object } state
 * @return { object } object
*/
function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  };
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);
