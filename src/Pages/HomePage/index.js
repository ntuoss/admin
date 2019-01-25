import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from 'components/Animated/Logo';
import Heading from 'components/Heading';
import FullScreenComponent from 'components/FullScreenContainer';

const MainPage = styled(FullScreenComponent)`
	/* ... */
`;

class App extends Component {
	render() {
		return (
			<MainPage>
				<Logo />
				<Heading>NTUOSS | Admin Site</Heading>
			</MainPage>
		);
	}
}

export default App;
