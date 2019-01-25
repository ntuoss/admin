import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from 'components/Logo';

const opacityAnimation = keyframes`
	0% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
	100% {
		opacity: 1;
	}
`;

const LogoAnimation = styled(Logo)`
	animation: ${opacityAnimation} 3s ease-in-out infinite;
`;
class AnimatedLogo extends PureComponent {
	render() {
		return <LogoAnimation size={this.props.size} />;
	}
}

export default AnimatedLogo;
