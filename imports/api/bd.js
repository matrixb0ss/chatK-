import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { Accounts } from 'meteor/accounts-base'
import { browserHistory, Link } from 'react-router'

import './methods.js';

export const Datab = new Mongo.Collection('chatdb');

if (Meteor.isServer) {
  Meteor.publish('chatdb', function tasksPublication() {
    return Datab.find();
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    insertDatab(chatdb) {
      check(chatdb, {
        text:String,
        location:String,
      });
         if (! this.userId) {
        throw new Meteor.Error('not-authorized');
        browserHistory.push('/login');
      }
      else{
        Datab.insert({
          text: chatdb.text,
          location: chatdb.location,
          createdAt: new Date(),
          owner: this.userId,
          username: Meteor.users.findOne(this.userId).username,
        });

      }
   },

  });
}