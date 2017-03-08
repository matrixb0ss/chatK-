import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base'
import { browserHistory, Link } from 'react-router'
import { Meteor } from 'meteor/meteor';

import {Datab} from './bd.js'
import { findDOMNode } from 'react-dom';



if (Meteor.isServer){
Meteor.methods({
  EditPage(values){
    check(values,{
      newUsername:String,
      email:String,
      password:String,
    })
    if(! this.userId){
      throw new Meteor.Error('not-authoriz');
           
    }
    else{
      if(values.newUsername!=""){
      Accounts.setUsername(this.userId,values.newUsername);
    }

      if(values.password!=""){
    Accounts.setPassword(this.userId,values.password)

      }
      if(values.email!=""){
        Accounts.addEmail(this.userId, values.email);
      }
    }

  }

});

Meteor.methods({
  insertMassage(database) {
    check(database, {
      text: String,
      location: String,
    });
     
      Datab.insert({
        text: database.text,
        location: database.location,
        createdAt: new Date(),
        owner: this.userId,
        username: Meteor.users.findOne(this.userId).username,
    });

    
 },

});}
