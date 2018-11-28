import React, { Component } from 'react';
import './App.css';


// Firebase.
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Styles
import './App.css';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyA7FGUFVRwDRjnZ8ke5u6O5XhYzxViOqp4",
  authDomain: "react-project-test-1c5c7.firebaseapp.com",
  databaseURL: "https://react-project-test-1c5c7.firebaseio.com",
  projectId: "react-project-test-1c5c7",
  storageBucket: "react-project-test-1c5c7.appspot.com",
  messagingSenderId: "420809384933"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class SignInScreen extends Component {

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google , Facebook , Etc as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccess: () => false
    }
  };

  render() {
    return (
      <div className="container">
        <h1>FirebaseUI-React</h1>
        <h1> with Firebase Authentication</h1>
        <p>Please Sign-in</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    );
  }
}

export default SignInScreen;

