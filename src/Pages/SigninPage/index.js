import React, { Component } from 'react';
import styled from 'styled-components';
import FullScreenContainer from 'components/FullScreenContainer';
import Logo from 'components/Animated/Logo';
import Signin from 'components/Signin';
import { Redirect } from 'react-router-dom';
import { withFirebase } from 'api/firebase';
const MainPage = styled(FullScreenContainer)`
	/* ... */
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authUser: null
		};
	}
	componentDidMount() {
		this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
			authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
		});
	}
	componentWillUnmount() {
		this.listener();
	}
	render() {
		let { from } = this.props.origin || { from: { pathname: '/' } };
		return this.state.authUser ? (
			<Redirect to={from} />
		) : (
			<MainPage>
				<Logo />
				<Signin />
			</MainPage>
		);
	}
}

export default withFirebase(App);
