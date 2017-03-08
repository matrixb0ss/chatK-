import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import ReactDOM from 'react-dom';
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import LiMassages from './mess.jsx';


export default class EditPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
      username:'',
    };
  this.handleEdit = this.handleEdit.bind(this);
}

handleEdit(e){
  e.preventDefault();

  let username = document.getElementById('editusername').value;
  let email = document.getElementById('editemail').value;
  let password = document.getElementById('editpassword').value;
  let passwordconf = document.getElementById('password-conf').value;

    if (password != passwordconf){
     this.setState({error:"Passwords is different, please try again!"})
    }

    else{

      if( username!="" || email!="" || password!=""){

        Meteor.apply('EditPage', [{
         newUsername: username,
         email: email,
         password: password,
        }]
          );

      this.setState({error:"Changes Confirmed"});

      }

    else{
      this.setState({error:"Nothing Changed"});
    }
  }
}

handleBack(event){
  browserHistory.push('/');
}

  render(){
    const error = this.state.error;

    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Edit your profile</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ? 
                <div className="alert alert-danger fade in">{this.state.error}</div> :''}
                  <form id="login-form" className="form col-md-12 center-block" onSubmit={this.handleEdit}>
                    
                    <div className="form-group">
                      <input type="text" id="editusername" ref="textInput" className="form-control input-lg" placeholder="New username"/>
                    </div>

                    <div className="form-group">
                      <input type="email" id="editemail" ref="textInput" className="form-control input-lg" placeholder="New email"/>
                    </div>

                    <div className="form-group">
                      <input type="password" id="editpassword" ref="textInput" className="form-control input-lg" placeholder="New password"/>
                    </div>

                    <div className="form-group">
                      <input type="password" id="password-conf" ref="textInput" className="form-control input-lg" placeholder="Repeat new password"/>
                    </div>

                    <div className="form-group">
                      <input type="submit" id="login-button" className="btn btn-lg btn-primary btn-block" value="Confirm" />
                    </div>
                  </form>

                  <div className="form-group text-center" id="back">
                      <input type="submit" onClick={this.handleBack} id="login-button" className="btn btn-primary btn-lg btn-block" value="Back to chat" />
                  </div>

             </div>
            <div className="modal-footer" style={{borderTop: 0}}></div>
          </div>
        </div>
      </div>
    );}
  }