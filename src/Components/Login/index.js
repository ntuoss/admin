import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import { withFirebase } from 'api/firebase';
import * as ROUTE from 'utils/routes';
import { withRouter } from 'react-router-dom';
const Form = styled.form`
	box-sizing: border-box;
`;

class Login extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			email: process.env.REACT_APP_FIREBASE_EMAIL || '',
			password: process.env.REACT_APP_FIREBASE_PASSWORD || ''
		};
	}
	inputField = () => [
		{
			key: 'email',
			name: 'email',
			type: 'text',
			placeholder: 'email address',
			value: this.state.email,
			autoComplete: 'off',
			onChange: e => {
				this.setState({ email: e.target.value });
			}
		},
		{
			key: 'password',
			name: 'password',
			type: 'password',
			placeholder: 'password',
			autoComplete: 'off',
			value: this.state.password,
			onChange: e => {
				this.setState({ password: e.target.value });
			}
		},
		{
			key: 'submit',
			type: 'submit',
			value: 'Sign In',
			onClick: e => {
				const { email, password } = this.state;
				e.preventDefault();
				this.props.firebase
					.signIn(email, password)
					.then()
					.then(() => {
						this.props.history.push(ROUTE.LANDING);
					});
			}
		}
	];
	render() {
		return (
			<Form>
				{this.inputField().map(item => (
					<Input {...item} />
				))}
			</Form>
		);
	}
}

export default withRouter(withFirebase(Login));
