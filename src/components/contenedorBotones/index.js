import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import BotonEasy from './botones/BotonEasy';
import BotonMedium from './botones/BotonMedium';
import BotonHard from './botones/BotonHard';
import './style.css';

class Botones extends Component {
  render(){
    return (
      <div>
        <BotonEasy />
        <BotonMedium />
        <BotonHard />
      </div>
    )
  }
}

export default connect()(Botones);