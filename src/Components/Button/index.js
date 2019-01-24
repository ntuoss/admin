import styled from 'styled-components';

const Button = styled.button`
	font-size: 2rem;
	padding: 15px;
	color: ${props => props.theme.highlight};
	background: transparent;
	border: solid 3px ${props => props.theme.highlight};
	border-radius: 10px;
	cursor: pointer;
	transition: 0.8s;
	&:active,
	&:focus {
		outline: none;
	}
	&:hover {
		background: ${props => props.theme.highlight};
		color: ${props => props.theme.primary};
	}
`;

export default Button;
