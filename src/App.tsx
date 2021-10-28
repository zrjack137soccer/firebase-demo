import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignInPage from "./SignInPage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpBfbU5y47O9-oUc9zS018E5IJ0NaEUV0",
  authDomain: "mutual-auth-dev.firebaseapp.com",
  projectId: "mutual-auth-dev",
  storageBucket: "mutual-auth-dev.appspot.com",
  messagingSenderId: "116495773519",
  appId: "1:116495773519:web:79d1938128533268bf9f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

var firebase = require('firebase')
var firebaseui = require('firebaseui');

//var ui = new firebaseui.auth.AuthUI(firebase.auth());
/*
ui.start('#firebaseui-auth-container', {
  signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
});*/
function App() {
  return (
    <div className="App">
      <SignInPage></SignInPage>
    </div>
  );
}

export default App;
