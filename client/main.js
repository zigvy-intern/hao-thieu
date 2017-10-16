import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { createApp } from 'mantra-core';
import initContext from './configs/context';
//modules
import coreModule from './modules/core';
import usersModule from './modules/users';
import itemsModule from './modules/items'
// import './main.html';

//init context
const context = initContext();
//create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(usersModule);
// app.loadModule(usersModule);
app.loadModule(itemsModule);
app.init();
