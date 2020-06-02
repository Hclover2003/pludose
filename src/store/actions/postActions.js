export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firebase
    const fireStore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    fireStore
      .collection("posts")
      .add({
        ...post,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
    console.log(post);
  };
};
