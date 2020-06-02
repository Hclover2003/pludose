import React, { Component } from "react";
import { createPost } from "../../store/actions/postActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Writer from "./Writer";

class CreatePost extends Component {
  state = {
    title: "",
    content: null,
    authorized: false,
  };
  eventHandler = (data) => {
    console.log(data.content);
    this.setState({
      content: data.content,
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createPost(this.state);
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signIn" />;
    return (
      <div className="container createpost">
        <form onSubmit={this.handleSubmit} className="white">
          <h5>Submit a Post</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <Writer onChange={this.eventHandler} />
          <button type="submit">Submit</button>
        </form>
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
