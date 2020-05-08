import React, { Component } from "react";

class Submissions extends Component {
  render() {
    return (
      <div className="container">
        <div className="col s12 m6">
          <div className="card z-depth-2 blue darken-4">
            <h3 className="white-text center ">Submit Your Work!</h3>
          </div>
        </div>
        <div className="card blue darken-3">
          <h4 className="white-text">
            Have an idea, something to say? Login or sign up for an account, and
            click the Create a Post button to send your post in :) Our team will
            review it and you should recieve an email response within 24 hours.
            If it follows our guidelines, you'll also see it up on our website!
          </h4>
        </div>
      </div>
    );
  }
}
export default Submissions;
