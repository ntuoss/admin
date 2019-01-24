import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Auth from 'utils/Auth';

import Input from 'Components/Input';

const Form = styled.form`
	box-sizing: border-box;
`;

const inputField = [
	{
		type: 'text',
		placeholder: 'email address',
		onClick: e => {
			e.preventDefault();
		}
	},
	{
		placeholder: 'password',
		type: 'password',
		onClick: e => {
			e.preventDefault();
		}
	},
	{
		type: 'submit',
		onClick: e => {
			e.preventDefault();
			Auth.authenticate();
		}
	}
];
class Login extends PureComponent {
	render() {
		return (
			<Form>
				{inputField.map(item => (
					<Input {...item} autoComplete="nope" />
				))}
			</Form>
		);
	}
}

export default Login;
