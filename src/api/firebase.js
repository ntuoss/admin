import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
const FirebaseContext = React.createContext(null);

class FirebaseApp {
	constructor() {
		const config = {
			apiKey: process.env.REACT_APP_FIREBASE_TOKEN || '',
			authDomain: 'hackoss.firebaseapp.com',
			databaseURL: 'https://hackoss.firebaseio.com',
			projectId: 'hackoss',
			storageBucket: 'hackoss.appspot.com',
			messagingSenderId: '424154730178'
		};
		firebase.initializeApp(config);
		this.auth = firebase.auth();
	}
	signin = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

	signout = () => this.auth.signOut();
}

const withFirebase = Component => props => (
	<FirebaseContext.Consumer>
		{firebase => <Component {...props} firebase={firebase} />}
	</FirebaseContext.Consumer>
);

export default firebase;
export { FirebaseContext, FirebaseApp, withFirebase };
