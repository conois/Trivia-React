import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BotonEasy extends Component {
	constructor(props){
		super(props);
	}
	render(){
		let question = []; 
		console.log(this.state.results)

		return (
		<div>
    	<button onClick={onGetQuestion}>Easy</button>
  	</div>
		)	
	}
}
export default BotonEasy;