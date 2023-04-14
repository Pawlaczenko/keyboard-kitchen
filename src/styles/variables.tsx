import { css } from "styled-components";

export const BREAKPOINTS = {
    remToggle: "max-width:93.75em"
}

export const variables = css`
    html {
        //COLORS    
        --color-primary: #FAAB78;
        --color-secondary: #FFDCA9;
        --color-yellow: #fcf9be;
        --color-console: #121212;
        --color-error: #f74134;

        //TYPOGRAPHY
        --fs-heading: 2rem;
        --fs-body: 1.6rem;

        --fw-regular: 400;
        --fw-bold: 700;

       //GRADIENTS
       --gradient-background: linear-gradient(
            to top left,
            #7D1E3C,
            #92243F 10%,
            #C02E36 20%,
            #C83135 35%,
            #E86C39 60%,
            #F87C50 80%,
            #F2BB4D 100%);
        --shadow-primary: 0 .4rem .5rem 0 rgba(0,0,0,.25);
    }
`;