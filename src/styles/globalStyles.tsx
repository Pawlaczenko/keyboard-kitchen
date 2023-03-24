import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { BREAKPOINTS, variables } from "./variables";
import backOpace from '../assets/back_opace.png';
import logo from '../assets/logo.svg';

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

        font-size: var(--fs-body);
        font-family: 'rainyhearts';
        background: 
            url(${backOpace}) bottom left / 30% no-repeat,
            url(${logo}) top 1rem right 1rem no-repeat,
            var(--gradient-background);
    }
`;

export default GlobalStyles;