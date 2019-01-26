import styled from 'styled-components';

const TextField = styled.textarea.attrs({
  'data-gramm_editor': 'false'
})`
  height: 7rem;
  font-size: 1rem;
  border-radius: 4px;
  width: ${props => props.width || '100%'};
  margin: auto;
  border: solid 3px ${props => props.theme.highlight};
  background: transparent;
  color: ${props => props.theme.primary};
  padding: 10px;
  outline: none;
  resize: none;
  transition: 0.3s;
  &::selection,
  &:focus {
    box-shadow: 0 0 3px 2px
      ${props =>
        props.type !== 'submit' ? props.theme.highlight : 'transparent'};
  }
  &::placeholder {
    color: ${props => props.theme.hint};
  }
`;
export default TextField;
