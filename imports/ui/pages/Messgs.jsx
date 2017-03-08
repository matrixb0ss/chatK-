import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'

export default class Dno extends Component {

Handlecheck(event){
 	const currentUser = Meteor.user();
	
	if (this.props.task.owner == Meteor.userId()){
		return(
				<li><h4 id="myusename">{this.props.task.username} : {this.props.task.text}</h4></li>
    	);
}
	else{
		return(
				<li><h4>{this.props.task.username} : {this.props.task.text}</h4></li>
   		);
	}
}	

  render() {
    return (
    	<div  id="onemassage">
    		{this.Handlecheck()}
    	</div>

    );
  }
}
 
Dno.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};