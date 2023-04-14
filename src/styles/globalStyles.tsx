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
            font-family: 'Minecraft';
            src: url('/fonts/Minecraft.woff2') format('woff2'),
                 url('/fonts/Minecraft.woff') format('woff'),
                 url('/fonts/Minecraft.ttf') format('truetype');
        }
    }

    body {
        overflow: hidden;
        min-height: 100vh;
        background-color: var(--color-console);

        font-size: var(--fs-body);
        font-family: 'Minecraft';
    }
`;

export default GlobalStyles;