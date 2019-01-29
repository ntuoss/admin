import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
const FirebaseContext = React.createContext(null);

class FirebaseApp {
  constructor() {
    const config = {
      apiKey: process.env.REACT_APP_FIREBASE_TOKEN || '',
      authDomain: 'hackoss-admin.firebaseapp.com',
      databaseURL: 'https://hackoss-admin.firebaseio.com',
      projectId: 'hackoss-admin',
      storageBucket: 'hackoss-admin.appspot.com',
      messagingSenderId: '841474314837'
    };
    firebase.initializeApp(config);
    this.auth = firebase.auth();
  }
  signin = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signout = () => this.auth.signOut();
}

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default firebase;
export { FirebaseContext, FirebaseApp, withFirebase };
