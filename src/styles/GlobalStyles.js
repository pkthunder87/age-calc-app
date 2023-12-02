import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    /* Primary Colors */
    --color-purple: hsl(259, 100%, 65%);
    --color-light-red: hsl(0, 100%, 67%);

    /* Neutral Colors */
    --color-white: hsl(0, 0%, 100%);
    --color-off-white: hsl(0, 0%, 94%);
    --color-light-grey: hsl(0, 0%, 86%);
    --color-smokey-grey: hsl(0, 1%, 44%);
    --color-off-black: hsl(0, 0%, 8%);
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-size: 62.5%;

     @media only screen and (max-width: 25em) {
    font-size: 34%;
  }
}

body {
    height: 100dvh;
    width: 100dvw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-off-white);
    font-family: 'Poppins', sans-serif;
    font-kerning: normal;
    font-smooth: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalStyles;
