import { createGlobalStyle } from 'styled-components';

export const colors = {
  colorPrimary: '#66829A',
  // colorPrimary: '#345A99',
  colorSecundary: '#DEDDD7',
  blackRGBA: 'rgba(0,0,0, .8)',
  black: '#000000',
  white: '#ffffff',
  error: 'rgb(164, 38, 44)',
};

export const centerFlex = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
  
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
