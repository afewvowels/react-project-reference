import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  /**
   * Use these colors
   */
  accent1: "#b81a68",
  accent2: "#63d9c9",
  accent2Light: "#55decc",
  accent2Dark: "rgb(16,48,51)",
  dark: "#575756",
  dark2: "rgba(45,62,80,.76)",
  dark3: "#071c22",
  dark4: "rgb(12,48,52)",
  dark5: "rgb(11,43,47)",
  light: "#ffffff",
  red: "#f55753",

  /**
   * Use these for heading sizes
   */
  h1: "4.0rem",
  h2: "3.0rem",
  h3: "2.5rem",
  h4: "2.0rem",
  h5: "1.5rem",
  h6: "1.0rem",

  /**
   * Use this for line line-height
   */
  lineHeight: "1.75rem",

  /**
   * Media Query Widths
   */
  phoneOnly: "500px",
  tabletPortrait: "768px",
  tabletLandscape: "992px",
  desktopSmall: "1280px"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
