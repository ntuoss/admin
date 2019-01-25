import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FullScreenContainer from 'components/FullScreenContainer';
import Logo from 'components/Logo';
import Heading from 'components/Heading';

const MainPage = styled(FullScreenContainer)`
	/* ... */
`;

class App extends PureComponent {
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
