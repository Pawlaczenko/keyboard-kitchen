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

        //TYPOGRAPHY
        --fs-heading: 2.4rem;
        --fs-body: 2rem;

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