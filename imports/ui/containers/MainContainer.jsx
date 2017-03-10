import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data'
import MainPage from '../pages/MainPage.jsx'
import ReactDOM from 'react-dom'
import {Datab} from '../../api/bd.js';

export default MainContainer = createContainer(({params}) => {
  const currentUser = Meteor.user();
  let parameters = params.location;
  Meteor.subscribe('chatdb');
  Meteor.subscribe('userData');
  	return {
   		chatdb: Datab.find({"location":parameters}, {sort:{createdAt: -1}}).fetch(),
 	currentUser,
  	};
}, MainPage);
