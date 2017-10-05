import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { createApp } from 'mantra-core';
import initContext from './configs/context';
//modules
import coreModule from './modules/core';
import usersModule from './modules/users';
import itemsModule from './modules/items'
import './main.html';

//init context
const context = initContext();
//create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(usersModule);
app.loadModule(itemsModule);
app.init();

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
