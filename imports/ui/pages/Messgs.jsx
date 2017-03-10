import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'

export default class Chatmessgs extends Component {

handleMess(event){
 	const currentUser = Meteor.user();
	if (this.props.task.owner == Meteor.userId()){
		return(
				<li>
          <h4 id="myusename"><span>{this.props.task.username}</span> : {this.props.task.text}</h4>
        </li>
    );
  }
	else{
		return(
				<li>
          <h4><span>{this.props.task.username}</span> : {this.props.task.text}</h4>
        </li>
   		);
	}
}	
  render() {
    return(
    	<div  id="messg">
    		{this.handleMess()}
    	</div>

    );
  }
}
 
Chatmessgs.propTypes = {
  task: PropTypes.object.isRequired,
};