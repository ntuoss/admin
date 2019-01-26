import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: inline-block;
  position: absolute;
  color: ${props => props.theme.highlight};
  font-size: 1rem;
  right: 0.2rem;
  top: 0.1rem;
  font-family: 'Helvetica Neue', sans-serif;
  user-select: none;
  text-shadow: 0 0 2px ${props => props.theme.background};
`;
const Wrapper = styled.div`
  position: relative;
  margin: ${props => props.margin || '1rem 0 0 0'};
  & > input {
    display: block;
    position: relative;
    width: ${props => props.width || '100%'};
    padding: ${props => (props.type === 'submit' ? '10px 0px' : '10px')};
    border: ${props =>
      props.type === 'submit' ? `solid 3px ${props.theme.highlight}` : 'none'};
    background: ${props =>
      props.type === 'submit' || props.value
        ? `transparent`
        : props.theme.secondary};
    color: ${props =>
      props.type === 'submit' ? props.theme.highlight : props.theme.primary};
    border-radius: 5px;
    font-size: 1.2rem;
    transition: 0.5s;
    &:hover {
      background: ${props =>
        props.type === 'submit'
          ? props.theme.highlight
          : props.theme.secondary};
      color: ${props =>
        props.type === 'submit' ? props.theme.primary : props.theme.primary};
      cursor: ${props => (props.type === 'submit' ? 'pointer' : 'text')};
    }
    &:focus,
    &:active {
      outline: none;
      box-shadow: 0 0 3px 2px
        ${props =>
          props.type !== 'submit' ? props.theme.highlight : 'transparent'};
    }
    &::placeholder {
      color: ${props => props.theme.hint};
    }
  }
`;

class Input extends PureComponent {
  render() {
    const { label, name, ...rest } = this.props;
    return (
      <Wrapper {...rest}>
        {label && <Label htmlFor={name}>{label}</Label>}
        <input
          autoComplete="off"
          onSubmit={e => e.preventDefault}
          {...this.props}
        />
      </Wrapper>
    );
  }
}

export default Input;
