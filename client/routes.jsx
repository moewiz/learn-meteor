import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import { MainLayout } from './layouts/MainLayout.jsx';
import HelloWorld from './ui/HelloWorld.jsx';

FlowRouter.route('/', {
  action() {
    console.log('Home');
  }
});

FlowRouter.route('/hello', {
  action() {
    console.log('Hello');
    mount(MainLayout, {
      content: (<HelloWorld />)
    });
  }
});