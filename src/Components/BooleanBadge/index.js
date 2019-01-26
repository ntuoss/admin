import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Badge = styled.span`
  border-radius: 50px;
  padding: 3px 16px;
  font-size: 1.2rem;
  width: auto;
  margin: ${props => props.margin || '10px'};
  background: ${props =>
    props.select ? props.theme.highlight : props.theme.secondary};
  color: ${props => (props.select ? props.theme.primary : props.theme.hint)};
  box-shadow: 0 0 ${props => (props.select ? '10px' : '0')}
    ${props => props.theme.highlight};
  user-select: none;
  cursor: pointer;
`;
class BooleanBadge extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      select: false
    };
  }
  render() {
    return <Badge {...this.props} />;
  }
}

export default BooleanBadge;
