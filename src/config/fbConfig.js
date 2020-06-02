import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/database";

var fbConfig = {
  apiKey: "AIzaSyBCqTOSPmN-gtzrhE_msdcBctfG5SD8z0U",
  authDomain: "pludo-c58c4.firebaseapp.com",
  databaseURL: "https://pludo-c58c4.firebaseio.com",
  projectId: "pludo-c58c4",
  storageBucket: "pludo-c58c4.appspot.com",
  messagingSenderId: "31551233129",
  appId: "1:31551233129:web:c2c61be9da0c96381b56f8",
  measurementId: "G-DNF4L4VY85",
};
// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.analytics();
firebase.firestore();

const db = firebase.firestore();
export { db };
export default firebase;
