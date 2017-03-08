import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import './methods.js';

export const Datab = new Mongo.Collection('chatdb');

if (Meteor.isServer) {
  // This code only runs on the server
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
    Massages.insert({
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