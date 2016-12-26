import React from 'react';

const Resolutions = new Mongo.Collection("resolutions");

export default class HelloWorld extends React.Component {

  addResolution(event) {
    event.preventDefault();

    console.log(this);
  }

  render() {
    return (
      <div>
        <h1>My Resolutions</h1>
        <form className="new-resolutions" onSubmit={this.addResolution.bind(this)}>
          <input type="text" ref="resolution" placeholder="Finish React Meteor Series" />
        </form>
      </div>
    );
  }
}