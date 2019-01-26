import React, { Component } from 'react';
import styled from 'styled-components';
import FullScreenContainer from 'components/FullScreenContainer';
import Logo from 'components/Animated/Logo';

const MainPage = styled(FullScreenContainer)`
	display: flex;
	flex-flow: row;
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authUser: null
		};
	}
	render() {
		return (
			<MainPage>
				<Logo />
			</MainPage>
		);
	}
}

export default App;
