import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { filter, type } = this.props;

    return (
      <button onClick={ filter }>{ type }</button>
    );
  }
}

Button.propTypes = {
  filter: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

export default Button;
