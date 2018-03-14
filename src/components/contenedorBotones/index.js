import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import BotonEasy from './botones';
import BotonMedium from './botones';
import BotonHard from '.botones';
import styles from './styles.css';

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

export default Botones;