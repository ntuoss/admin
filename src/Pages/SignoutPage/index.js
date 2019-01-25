import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withFirebase } from 'api/firebase';

class SignOut extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authUser: null
		};
	}
	componentDidMount() {
		this.props.firebase.signout();
	}
	render() {
		return <Redirect to="/" />;
	}
}

export default withFirebase(SignOut);
