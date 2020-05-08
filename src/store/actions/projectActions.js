import { firestore } from "firebase";

export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firebase
    const fireStore = getFirestore();
    fireStore
      .collection("posts")
      .add({
        ...post,
        authorfirstname: "Pludo",
        authorlastname: "M.",
        authorId: 12345,
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
