import React, { Component } from 'react';
import styled from 'styled-components';
import Container from 'Components/Container';
import Logo from 'Components/Logo';
import Login from 'Components/Login';
import { Redirect } from 'react-router-dom';
import Auth from 'utils/Auth';

const MainPage = styled(Container)`
	/* ... */
`;

class App extends Component {
	render() {
		let { from } = this.props.origin || { from: { pathname: '/' } };
		return Auth.authenticated ? (
			<Redirect to={from} />
		) : (
			<MainPage>
				<Logo />
				<Login />
			</MainPage>
		);
	}
}

export default App;
