import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  colors: {
    border: `hsla(0, 0%, 0%, 0.08)`,
    button: `hsla(204, 100%, 59%, 0.5)`,
    buttonAlt: `hsl(204, 100%, 59%)`,
    line: `hsla(0 , 100%, 0%, 0.05)`,
    body: `hsla(0, 0%, 100%, 0.9)`
  }
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif, Helvetica;
    background-color: ${lightTheme.colors.body};
  }
`;