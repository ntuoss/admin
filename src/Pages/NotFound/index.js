import React, { Component } from 'react';
import styled from 'styled-components';
import Container from 'Components/Container';
import Logo from 'Components/Logo';
import Heading from 'Components/Heading';

const MainPage = styled(Container)`
	/* ... */
`;

class App extends Component {
	render() {
		return (
			<MainPage>
				<Logo />
				<Heading>Page Not Found</Heading>
			</MainPage>
		);
	}
}

export default App;
