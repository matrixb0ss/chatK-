import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router'

 
// Task component - represents a single todo item
export default class City extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '/Lviv/'};
    this.handleChange = this.handleChange.bind(this);

}

  componentWillMount(){
    browserHistory.push(this.state.value);
}


  handleChange(event) {
  	this.setState({value: event.target.value});
    browserHistory.push(event.target.value);
}

  render() {
    return (
        <form id="locform" action="" method="post">
          <select className="cities" size="1" value={this.state.value} onChange={this.handleChange}>
            <option value="/Lviv/">Lviv</option>
            <option value="/Paris/">Paris</option>
            <option value="/Seoul/">Seoul</option>
            <option value="/Stockholm/">Stockholm</option>
            <option value="/Washington/">Washington</option>
          </select>
        </form>
    );
  }
}