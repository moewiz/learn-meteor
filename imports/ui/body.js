import { Template } from 'meteor/templating';

import Items from '../api/items.js';

import './body.html';

Template.body.helpers({
  title: 'This is title',
  hello: 'Hi World',

  items() {
    return Items.find({});
  }
});

Template.body.events({
  'click .test'(event) {
    console.log('hello');
  }
});
