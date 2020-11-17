import React, { useRef, useState } from "react";

import './App.css';

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { auth } from "./services/firebase";

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
