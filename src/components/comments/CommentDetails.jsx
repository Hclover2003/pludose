import React, { useState } from "react";
import moment from "moment";
import {
  likeComment,
  unlikeComment,
  usersWhoLiked,
  usersWhoUnliked,
  deleteComment,
} from "../../store/actions/commentActions";
import ReplyBox from "./ReplyBox.jsx";
import { connect } from "react-redux";

const CommentDetails = (props) => {
  const { comment, userId, postId, mykey } = props;

  const handleDelete = () => {
    props.deleteComment(mykey);
  };

  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      handleDelete();
    }
  };
  const deleteCommentIcon =
    userId == comment.userId ? (
      <a href="#" onClick={confirmDelete}>
        <i className="material-icons right-align">delete</i>
      </a>
    ) : null;

  const [reply, setReply] = useState(null);

  const handleReply = () => {
    setReply(<ReplyBox />);
  };

  const [heart, setHeart] = useState(
    comment.users.includes(userId) ? "favorite" : "favorite_border"
  );
  const handleHeart = () => {
    const newHeart =
      heart === "favorite_border" ? "favorite" : "favorite_border";
    setHeart(newHeart);
    if (newHeart == "favorite") {
      props.likeComment(mykey);
      props.usersWhoLiked(mykey, userId);
    } else {
      props.unlikeComment(mykey);
      props.usersWhoUnliked(mykey, userId);
    }
  };
  if (comment.commentId == postId) {
    return (
      <div className="container commentdetails">
        <div className="card">
          <div className="card-content left-align">
            <h6 className="blue-text text-darken-4"> {comment.comment}</h6>
            <p className="grey-text">{comment.name}</p>
            <p className="grey-text right-align">
              {moment(comment.createdAt.toDate()).calendar()}
            </p>
          </div>
          <div className="card-action">
            {deleteCommentIcon}
            <a href="#" onClick={handleHeart}>
              <i className="material-icons right-align">{heart}</i>
            </a>
            <a>{comment.likes}</a>
            <a onClick={handleReply}>reply</a>
            {reply}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    userId: state.firebase.auth.uid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    likeComment: (commentId) => dispatch(likeComment(commentId)),
    unlikeComment: (commentId) => dispatch(unlikeComment(commentId)),
    usersWhoLiked: (commentId, user) =>
      dispatch(usersWhoLiked(commentId, user)),
    usersWhoUnliked: (commentId, user) =>
      dispatch(usersWhoUnliked(commentId, user)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentDetails);
