import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from 'components/Logo';

const opacityAnimation = keyframes`
	0%, 100% {
		opacity: 0.5;
		/* filter: invert(75%); */
	}
	50% {
		opacity: 1;
		/* filter: drop-shadow(0 0 1px #fff); */
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
