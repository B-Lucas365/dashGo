import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --gray-900: #181b23;
        --gray-800: #1f2029;
        --gray-700: #353646;
        --gray-600: #4b4d63; 
        --gray-500: #616480;
        --gray-400: #797d9a;
        --gray-300: #9699b0;
        --gray-200: #b3b5c6;
        --gray-100: #d1d2dc;
        --gray-50: #F7FAFC;

        --pink-500: #D53F8C ;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto;
    }

    body{
        background: var(--gray-900);
        color:var(--gray-50);
    }
`