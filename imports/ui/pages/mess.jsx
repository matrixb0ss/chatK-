import React, { Component, PropTypes } from 'react';

 
// Task component - represents a single todo item
export default class Chatmessgs extends Component {

Handlecheck(event){
 	const currentUser = Meteor.user();
	if (this.props.massage.owner == Meteor.userId()){
		return(
      <li><h4 id="myusename">{this.props.massage.username}(You)</h4><span>{this.props.massage.text}</span></li>
    );
}
	else{
		return(
      <li><h4>{this.props.massage.username}:</h4><span>{this.props.massage.text}</span></li>
   	);
	}
}
  render() {
    return(
    	 <div id="onemassage">
    	{this.Handlecheck()}
    		</div>

    );
  }
}
 
Chatmessgs.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  massage: PropTypes.object.isRequired,
};