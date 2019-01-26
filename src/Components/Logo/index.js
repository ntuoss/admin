import React, { PureComponent } from 'react';
import styled from 'styled-components';
import LogoColor from 'assets/Logo_Colour.png';
import LogoDark from 'assets/Logo_Dark.png';
import LogoLight from 'assets/Logo_Light.png';

const Img = styled.img`
  display: block;
  height: ${props => props.size};
  width: ${props => props.size};
`;

Img.defaultProps = {
  size: '18vw'
};

class Logo extends PureComponent {
  constructor(props) {
    super(props);
    switch (this.props.LogoTheme) {
      case 'dark':
        this.logo = LogoDark;
        break;
      case 'light':
        this.logo = LogoLight;
        break;
      default:
        this.logo = LogoColor;
    }
  }
  render() {
    return <Img src={this.logo} alt="NTUOSS logo" {...this.props} />;
  }
}

export default Logo;
