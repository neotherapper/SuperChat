import React from "react";

import './App.css';

import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "./services/firebase";
import { ChatRoom } from "./chat/chat-room";
import { SignIn  } from "./auth/signin";
import { SignOut } from "./auth/signout";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
