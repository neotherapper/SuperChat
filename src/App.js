import React, { useRef, useState } from "react";

import './App.css';

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  // your config
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

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">

        <section>
          <h1>Hi</h1>
        </section>

      </header>
    </div>
  );
}

export default App;
