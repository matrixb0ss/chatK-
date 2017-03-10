import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data'

import Form from './Form.jsx';
import City from './Сity.jsx';
import Chatmessgs from './Messgs.jsx';
import {Datab} from '../../api/bd.js';

export class MainPage extends Component {
  constructor(props){
    super(props);
    this.state = {username: ''};
  }
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Chatmessgs key={task._id} task={task}/>
    ));
  }

  render(){
    return (
        <div className="container-main">
          <div className="content">
            <City/>                
            <div className="messages-content">
              <ul>
                {this.renderTasks()}
              </ul>
            <Form location = {this.props.params.location}/> 
            </div> 
          </div>
        </div>
    );
  }
}

MainPage.PropTypes = {
  username: React.PropTypes.string,
  tasks: PropTypes.array.isRequired,
};

export default createContainer(({params}) => {
  Meteor.subscribe('chatdb');
    return {
      tasks: Datab.find({"location": params.location}).fetch(),
    };
  }, 
MainPage);