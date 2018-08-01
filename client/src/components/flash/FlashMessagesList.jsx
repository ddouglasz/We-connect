import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import FlashMessage from './FlashMessage.jsx';
import { deleteFlashMessage } from '../../actions/flashMessages';
/**
 * @class FlashMessage
*/
export class FlashMessagesList extends React.Component {
  /**
 * @description Class component for Sogn up form
 * @param { object } message
 * @return { object } object
*/
  render() {
    const { deleteMessage } = this.props;
    const messages = this.props.messages.map(message =>
      <FlashMessage
        Key={message.id}
        message={message} deleteFlashMessage={deleteMessage}
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
  deleteMessage: PropTypes.func.isRequired
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

export default connect(mapStateToProps, { deleteMessage: deleteFlashMessage })(FlashMessagesList);
