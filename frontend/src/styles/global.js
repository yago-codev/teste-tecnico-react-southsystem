import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: #A2B1CA;
  }

  html, body, .App {
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
    background: #ccdefa;
  }

  input::placeholder {
    color: #A2B1CA;
  }

  input {
    color: #6C7A92;
  }
`;
