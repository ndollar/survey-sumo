import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

require('app/stylesheets/components/error-block.css');

const mapStateToProps = (state, ownProps) => ({
  message: ownProps.messageFromState(state),
});

const ErrorBlock = ({ message }) => {
  if (message) {
    return (
      <div className="alert alert-danger error-block" role="alert">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
        <span className="sr-only">Error:</span>
        <span className="error-block-message">{message}</span>
      </div>
    );
  }
  return (<div className="hidden no-error"></div>);
};

ErrorBlock.propTypes = {
  message: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ErrorBlock);
