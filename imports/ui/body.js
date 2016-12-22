import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  hello: 'Hi World'
});

Template.body.events({
  'click .test': function (event) {
    console.log('hello');
  }
});