import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: "AIzaSyDUQLyNq-lUpvV-RO6T5FgUhswc33Bj3TQ",
  authDomain: "dreamers-1258e.firebaseapp.com",
  databaseURL: "https://dreamers-1258e.firebaseio.com",
  projectId: "dreamers-1258e",
  storageBucket: "dreamers-1258e.appspot.com",
  messagingSenderId: "292955652759",
  appId: "1:292955652759:web:53f1162d3a618f8b919fd2",
  measurementId: "G-32LJYNM1DQ",
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

export { auth, firestore, analytics, firebase };
