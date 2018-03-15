import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadEasy} from './../../action/easy';
import './style.css';

class BoxQuestions extends Component{
  renderQuestionList() {
    return this.props.easy.map((quest) => {
      return(
        <div>
          <p key = {quest.question}>{ quest.question }</p>
        </div>
      )
    })
  }
  render(){
    return(
      <div>{ this.renderQuestionList() }</div>
    )
  }
}

function mapStateToProps(state) {
  return{
    easy: state.easyQuestions.list
  }
}

export default connect(mapStateToProps, {loadEasy} )(BoxQuestions);