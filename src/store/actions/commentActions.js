export const deleteComment = (commentId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firebase
    const fireStore = getFirestore();
    const db = fireStore.collection("comments").doc(commentId);

    db.delete()
      .then(() => {
        dispatch({ type: "DELETED_COMMENT", commentId });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_COMMENT_ERROR", err });
      });
  };
};

export const usersWhoLiked = (commentId, user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firebase
    const fireStore = getFirestore();
    const firebase = getFirebase();
    const db = fireStore.collection("comments").doc(commentId);

    db.update({
      users: firebase.firestore.FieldValue.arrayUnion(user),
    })
      .then(() => {
        dispatch({ type: "ADDED_USER_LIKE", user });
      })
      .catch((err) => {
        dispatch({ type: "ADDED_USER_LIKE_ERROR", err });
      });
  };
};
export const usersWhoUnliked = (commentId, user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firebase
    const fireStore = getFirestore();
    const firebase = getFirebase();
    const db = fireStore.collection("comments").doc(commentId);

    // let newWhoLiked = whoLiked.filter((i) => i !== user);

    db.update({
      users: firebase.firestore.FieldValue.arrayRemove(user),
    })
      .then(() => {
        dispatch({ type: "REMOVED_USER_LIKE", user });
      })
      .catch((err) => {
        dispatch({ type: "REMOVED_USER_LIKE_ERROR", err });
      });
  };
};
export const likeComment = (commentId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firebase
    const fireStore = getFirestore();
    const increment = fireStore.FieldValue.increment(1);
    fireStore
      .collection("comments")
      .doc(commentId)
      .update({
        likes: increment,
      })
      .then(() => {
        dispatch({ type: "LIKE_COMMENT", commentId });
      })
      .catch((err) => {
        dispatch({ type: "LIKE_COMMENT_ERROR", err });
      });
  };
};
export const unlikeComment = (commentId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firebase
    const fireStore = getFirestore();
    const increment = fireStore.FieldValue.increment(-1);
    fireStore
      .collection("comments")
      .doc(commentId)
      .update({
        likes: increment,
      })
      .then(() => {
        dispatch({ type: "UNLIKE_COMMENT", commentId });
      })
      .catch((err) => {
        dispatch({ type: "UNLIKE_COMMENT_ERROR", err });
      });
  };
};
export const createComment = (comment) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to firebase
    const fireStore = getFirestore();
    fireStore
      .collection("comments")
      .add({
        ...comment,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_COMMENT", comment });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_COMMENT_ERROR", err });
      });
    console.log(comment);
  };
};
export const createReply = (reply, commentId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    const firebase = getFirebase();
    fireStore
      .collection("comments")
      .doc(commentId)
      .update({
        replies: firebase.firestore.FieldValue.arrayUnion(reply),
      })
      .then(() => {
        dispatch({ type: "CREATE_REPLY", reply });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_REPLY_ERROR", err });
      });
  };
};
