import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './../contenedorPreguntas/question'
import { connect } from 'react-redux';
import { loadEasy } from './../../action/easy';
import './style.css';

class BoxQuestions extends Component{
  render () {
    return (
      <Question handleClick={this.props.loadEasy} question={this.props.question} />
      )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return (
     state.list
    )
}

export default connect(mapStateToProps, {loadEasy} )(BoxQuestions);