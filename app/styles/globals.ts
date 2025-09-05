import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    color: ${(props) => props.theme.colors.foreground};
    background:  ${(props) => props.theme.colors.background};
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;

    &:has(header div[data-state="open"]){
      overflow: hidden;
      pointer-events: none;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  [hidden] {
    display: none;
  }
`;
