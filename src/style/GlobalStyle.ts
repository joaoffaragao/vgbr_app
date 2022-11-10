import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,body{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background: black;

  }
  .App{
    width: 100vw;
    height: 100vh;
    background: black;

  }
`;

export default GlobalStyle;
