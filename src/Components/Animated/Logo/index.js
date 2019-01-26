import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from 'components/Logo';

const opacityAnimation = keyframes`
	0%, 100% {
		opacity: 0.5;
	}
	50% {
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
