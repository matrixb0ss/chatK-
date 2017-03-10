import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import ReactDOM from 'react-dom';
import {Datab} from '../../api/bd.js'

export default class Form extends Component {
	handleSubmit(event){
	    event.preventDefault(); 
	    const text = document.getElementById("messarea").value;
	    const location = this.props.location;

	    if (text){
	    	Meteor.apply('insertMassage', [{
			  location: location,
			  text: text,
	      	}],)
		}
	}	 
	
render(){
	return( 
		<div className="messagebox">
			<form className="messageform" onSubmit={this.handleSubmit.bind(this)}>
				<div className="row">
					<div className="col-md-10 no-pad ">
						<textarea id="messarea" ref="textInput" className="formarea" type="text" placeholder="enter your message" ></textarea><br/>
					</div>
					<div className="col-md-2 no-padd ">
						<input type="submit" className="btn btn-lg btn-primary btn-block knopka" value="Send" id="Sendbutt"></input>
                    </div>
                   </div>
			</form>
		</div>
		);
}
}
