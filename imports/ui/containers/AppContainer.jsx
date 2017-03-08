import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'

export default class AppContainer extends Component{
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount(){
    if (!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  edit(event){
    browserHistory.push('/edit/profile/')
  }

  logout(e){
    e.preventDefault();
    Meteor.logout();
    browserHistory.push('/login');
  }

  render(){
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Intergalactic Chat</a>
            </div>
            <div className="navbar-collapse">
              <span id="options" className="nav navbar-nav navbar-right">
                <a href="#" id="edit" onClick={this.edit}>Profile Editor</a>
                <a href="#" onClick={this.logout}>Logout</a>
              </span>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}