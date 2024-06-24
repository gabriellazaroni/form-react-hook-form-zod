import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        // PURPLE SCALE
        --dark-purple: #4D3F5D;
        --purple: #A78BCB;
        --medium-purple: #8e48ea;
        --light-purple: #8234e8;
        --lighest-purple: #FAF8FD;

        //BLACK AND WHITE
        --black: #000;
        --white: #fff;

        //GRAY SCALE
        --gray-10: #ECECED;
        --gray-20:  #C7C7C8;
        --gray-30:  #A2A1A3;
        --gray-40:  #7D7B7E;
        --gray-50:  #57565A;
        --gray-60:  #2E2D30;
        --gray-70: #121214;
        
        //SUPORT
        --information: #864ECE;
        --success: #0BB07B;
        --warning: #FFAD0D;
        --error: #F03D3D;

        //FONT SCALES
        --font-xxl: clamp(1rem, 20vw, 3.437rem); // 55px
        --font-xl: clamp(1.5rem, 7vw, 2.25rem); // 36px
        --font-l: clamp(0.2rem, 4vw , 1.375rem); // 22px
        --font-md: clamp(1rem, 2vw , 1.125rem); //18px
        --font-n: clamp(0.9rem, 2vw , 1rem); // 16px
        --font-sm: clamp(0.875rem, 2vw , 0.875rem); // 14px
        --font-xsm: clamp(0.7rem, 2vw , 0.75rem); // 12px
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: var(--font-sm);
    }
`
