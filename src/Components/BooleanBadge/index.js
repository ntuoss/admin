import React, { Component } from 'react';
import styled from 'styled-components';

const Badge = styled.span`
  border-radius: 50px;
  padding: 3px 16px;
  font-size: 1.2rem;
  width: auto;
  margin: ${props => props.margin || '10px'};
  background: ${props =>
    props.select === false || (props.select && props.select.length === 0)
      ? props.theme.secondary
      : props.theme.highlight};
  color: ${props =>
    props.select === false || (props.select && props.select.length === 0)
      ? props.theme.hint
      : props.theme.primary};
  box-shadow: 0 0
    ${props =>
      props.select === false || (props.select && props.select.length === 0)
        ? '0'
        : '10px'}
    ${props => props.theme.highlight};
  user-select: none;
  cursor: pointer;
  &::after {
    content: ${props => props.number};
  }
`;
class BooleanBadge extends Component {
  render() {
    return <Badge {...this.props} />;
  }
}

export default BooleanBadge;
