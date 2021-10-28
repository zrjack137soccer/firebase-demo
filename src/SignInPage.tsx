// Import FirebaseAuth and firebase.
import React, {useEffect, useState} from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//import Firebase from "./Firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBpBfbU5y47O9-oUc9zS018E5IJ0NaEUV0",
    authDomain: "mutual-auth-dev.firebaseapp.com",
    projectId: "mutual-auth-dev",
    storageBucket: "mutual-auth-dev.appspot.com",
    messagingSenderId: "116495773519",
    appId: "1:116495773519:web:79d1938128533268bf9f3a"
};
firebase.initializeApp(firebaseConfig)

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    },
};

function SignInScreen() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    if (!isSignedIn) {
        return (
            <div>
                <h1>My App</h1>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    }

    return (
        <div>
            <h1>My App</h1>
            <p>Welcome! You are now signed-in!</p>
            <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        </div>
    );
}

export default SignInScreen
