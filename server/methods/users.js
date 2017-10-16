import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { Accounts } from 'meteor/accounts-base'

export default function (){
  Meteor.methods({
    'users.create'(email, password){
      check(email, String);
      check(password, String);
      return Accounts.createUser({email, password});
    }
  });
}
