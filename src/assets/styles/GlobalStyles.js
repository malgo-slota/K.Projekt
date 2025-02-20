import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        /* font-size: 62.5%; */
        /* scroll-behavior: smooth; */
    }

    body {
        background: hsl(51, 14%, 90%);
        margin: 0;
        /* font-size: 1.6rem; */
        font-family: "Montserrat", sans-serif;
        line-height: 30px;
    }

    section {
        /* scroll-snap-align: start; */
    }

    ul, li, a {
        list-style-type: none;
        text-decoration: none;
    }

    p, h2 {
        margin: 0;
    }
`;