import React, { PureComponent } from 'react';
import styled from 'styled-components';
import * as ROUTES from 'utils/routes';
import { Link } from 'react-router-dom';
import { withFirebase } from 'api/firebase';

const HeaderList = styled.ul`
	display: inline-block;
	position: absolute;
	top: 0;
	right: 0;
`;
const HeaderItem = styled(Link)`
	margin: 0 10px;
	text-decoration: none;
	color: ${props => props.theme.hint};
`;

class Header extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			authUser: null
		};
		this.headerLinks = {
			LANDING: () => 'Home',
			PROJECTS: () => (this.state.authUser ? 'Project' : null),
			FORM: () => (this.state.authUser ? 'Plan' : null)
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
		return (
			<HeaderList>
				{Object.keys(ROUTES).map(
					item =>
						this.headerLinks[item] && (
							<HeaderItem to={ROUTES[item]}>{this.headerLinks[item]()}</HeaderItem>
						)
				)}
				<HeaderItem to={this.state.authUser ? ROUTES.SIGN_OUT : ROUTES.LOG_IN}>
					{this.state.authUser ? 'Sign Out' : 'Sign In'}
				</HeaderItem>
			</HeaderList>
		);
	}
}

export default withFirebase(Header);
