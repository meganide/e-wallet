import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'PT Mono', monospace;
    font-weight: 400;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  h1 {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  button {
    font-weight: 700;
    text-align: center;
  }

  #root, #__next {
    isolation: isolate;
  }
`;

export { GlobalStyle };
