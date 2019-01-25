import React, { PureComponent } from 'react';
import styled from 'styled-components';

class Input extends PureComponent {
	render() {
		return <input {...this.props} />;
	}
}

export default styled(Input)`
	display: block;
	box-sizing: border-box;
	width: 20rem;
	margin: 1rem auto;
	padding: ${props => (props.type === 'submit' ? '10px 0px' : '10px')};
	border: ${props => (props.type === 'submit' ? `solid 3px ${props.theme.highlight}` : 'none')};
	background: ${props => (props.type === 'submit' ? `transparent` : props.theme.secondary)};
	color: ${props => (props.type === 'submit' ? props.theme.highlight : props.theme.primary)};
	border-radius: 5px;
	font-size: 1.2rem;
	transition: 0.5s;
	&:hover {
		background: ${props =>
			props.type === 'submit' ? props.theme.highlight : props.theme.secondary};
		color: ${props => (props.type === 'submit' ? props.theme.primary : props.theme.primary)};
		cursor: ${props => (props.type === 'submit' ? 'pointer' : 'text')};
	}
	&:focus,
	&:active {
		outline: none;
		box-shadow: 0 0 3px 2px
			${props => (props.type !== 'submit' ? props.theme.highlight : 'transparent')};
	}
	&::placeholder {
		color: ${props => props.theme.hint};
	}
`;
