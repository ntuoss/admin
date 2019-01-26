import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = styled(Link)`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.size || '6.5vw'};
  width: ${props => props.size || '6.5vw'};
  text-decoration: none;
  border-radius: 10px;
  background: ${props => props.theme.highlight};
  font-size: ${props => props.size / 2 || '3.8vw'};
  color: ${props => props.theme.primary};
  box-shadow: 0 0 10px ${props => props.theme.hint};
  transition: 0.2s;
  transform: ${props =>
    props.location.pathname === props.to
      ? 'translateX(20px) scale(1.05)'
      : 'none'};
  &:hover {
    transform: translateX(20px) scale(1.05);
  }
  &:active {
    box-shadow: 0 0 3px ${props => props.theme.hint};
  }
`;

class NavigatorCard extends Component {
  render() {
    const { staticContext, ...cardProp } = this.props;
    return (
      <Card {...cardProp}>
        <FontAwesomeIcon icon={this.props.icon} />
      </Card>
    );
  }
}

export default withRouter(NavigatorCard);
