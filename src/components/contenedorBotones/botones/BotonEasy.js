import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BotonEasy extends React.Component{
  render() {
    return(
      <div>
        <button onClick={() => {this.props.handleClick()}}>Easy</button>
      </div>
    )
  }
}

export default BotonEasy;