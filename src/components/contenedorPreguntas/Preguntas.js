import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from 'redux';
import loadEasy from './../../action/easy';
import styles from './styles.css';

function mapStateToProps(state) {
  return{
    easy: state.easyQuestions.list
  }
}

class BoxQuestions extends Component{
  render(){
    return(
      <div></div>
    )
  }
}

export default connect(mapStateToProps, {loadEasy} )(BoxQuestions);