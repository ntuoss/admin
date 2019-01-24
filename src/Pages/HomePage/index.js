import React, { Component } from 'react';
import styled from 'styled-components';
import Container from 'Components/Container';
import Logo from 'Components/Logo';
import Heading from 'Components/Heading';
import Button from 'Components/Button';
import { Link } from 'react-router-dom';

const MainPage = styled(Container)`
	/* ... */
`;

class App extends Component {
	render() {
		return (
			<MainPage>
				<Logo />
				<Heading>NTUOSS | Admin Site</Heading>
				<Link to="/login">
					<Button>Login</Button>
				</Link>
			</MainPage>
		);
	}
}

export default App;
