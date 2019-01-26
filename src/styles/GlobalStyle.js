import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 1.4vw;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.bg};
  }
`;

export default GlobalStyle;
