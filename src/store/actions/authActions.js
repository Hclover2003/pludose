import firebase, { db } from "../../config/fbConfig";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

export const signIn = (credentials) => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: "SIGNED_OUT" }));
  };
};

export const signUp = (newUser) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return db
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            userName: newUser.userName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          });
      })
      .then((resp) => {
        return db
          .collection("todos")
          .doc(resp.user.uid)
          .set({
            todo: ["Read a book", "Smile"],
            complete: ["Create an account"],
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
