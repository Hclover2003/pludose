import React, { Component } from "react";
import { createComment } from "../../store/actions/commentActions";
import { connect } from "react-redux";

class CommentBox extends Component {
  state = {
    name: "",
    comment: "",
    userId: this.props.userId,
    commentId: this.props.postId,
    likes: 0,
    users: [],
    replies: [],
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createComment(this.state);
  };
  render() {
    if (this.props.userId) {
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
            />

            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              id="comment"
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
          <p className="mypadding">
            Please create an account first to comment.
          </p>
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
    createComment: (comment) => dispatch(createComment(comment)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
