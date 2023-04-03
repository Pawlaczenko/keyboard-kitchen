import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { BREAKPOINTS, variables } from "./variables";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${variables}

    html {
        font-size: 62.5%;

        @media only screen and (${BREAKPOINTS.remToggle}){
            font-size: 50%;
        }

        @font-face {
            font-family: 'rainyhearts';
            src: url('/fonts/rainyhearts.ttf');
        }
    }

    body {
        overflow: hidden;
        min-height: 100vh;
        background-color: var(--color-console);

        font-size: var(--fs-body);
        font-family: 'rainyhearts';
    }
`;

export default GlobalStyles;