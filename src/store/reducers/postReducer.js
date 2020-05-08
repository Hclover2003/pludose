const initState = {};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("post created", action.post);
      return state;
    case "CREATE_POST_ERROR":
      console.log("create post error", action.err);
      return state;
    default:
      return state;
  }
};

export default postReducer;
