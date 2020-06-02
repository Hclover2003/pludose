import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import CommentDetails from "./CommentDetails";

const Comments = (props) => {
  const comment = props.comment;
  const { postId } = props;
  console.log(comment);
  const objMap = comment ? (
    Object.keys(comment).map(function (i) {
      return (
        <CommentDetails
          postId={postId}
          comment={comment[i]}
          mykey={i}
          key={i}
        />
      );
    })
  ) : (
    <p>No Comments Yet</p>
  );
  if (comment) {
    objMap.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      var dateA = a.props.comment.createdAt.toDate();
      var dateB = b.props.comment.createdAt.toDate();
      return dateB - dateA;
    });
  }
  return <div>{objMap}</div>;
};

const mapStateToProps = (state, ownProps) => {
  const comments = state.firestore.data.comments;
  return {
    comment: comments,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => ["comments"])
)(Comments);
