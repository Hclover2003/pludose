import React, { Component } from "react";
import { createReply } from "../../store/actions/commentActions";
import { connect } from "react-redux";

class ReplyBox extends Component {
  state = {
    reply: "",
    likes: 0,
  };

  closeReplyBox = false;
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createReply(this.state.reply);
  };
  render() {
    if (this.props.userId) {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <textarea
              name="reply"
              id="reply"
              cols="30"
              rows="10"
              onChange={this.handleChange}
            ></textarea>
            <button type="submit" className="btn-flat pink white-text">
              Submit
            </button>
          </form>
        </div>
      );
    }
    return (
      <div className="container white">
        <div className="card">
          <p className="mypadding">Please create an account first to reply.</p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userId: state.firebase.auth.uid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createReply: (reply) => dispatch(createReply(reply)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReplyBox);
