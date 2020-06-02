const initState = {};

const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_COMMENT":
      console.log("comment created", action.comment);
      return state;
    case "CREATE_COMMENT_ERROR":
      console.log("create comment error", action.err);
      return state;
    case "LIKE_COMMENT":
      console.log("liked comment", action.commentId);
      return state;
    case "LIKE_COMMENT_ERROR":
      console.log("liked comment error", action.err);
      return state;
    case "UNLIKE_COMMENT":
      console.log("unliked comment", action.commentId);
      return state;
    case "UNLIKE_COMMENT_ERROR":
      console.log("unliked comment error", action.err);
      return state;
    case "ADDED_USER_LIKE":
      console.log("add user like", action.user);
      return state;
    case "ADDED_USER_LIKE_ERROR":
      console.log("add user like error", action.err);
      return state;
    case "REMOVED_USER_LIKE":
      console.log("remove user like", action.user);
      return state;
    case "REMOVED_USER_LIKE_ERROR":
      console.log("remove user like error", action.err);
      return state;
    case "DELETED_COMMENT":
      console.log("deleted comment");
      return state;
    case "DELETE_COMMENT_ERROR":
      console.log("delete comment error", action.err);
      return state;
    case "CREATE_REPLY":
      console.log("created reply", action.reply);
      return state;
    case "CREATE_REPLY_ERROR":
      console.log("create reply error error", action.err);
      return state;
    default:
      return state;
  }
};

export default commentReducer;
