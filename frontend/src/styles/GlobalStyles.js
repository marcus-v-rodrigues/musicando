import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

    :root {
        --navbar-height: 150px;
        --light-brown: #8d6852;
        --dark-brown: #462e25;

        --shadow: 0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);

        @media screen and (max-width: 800px){
            --navbar-height: 100px;
        }
    }

    
    //* { outline: 1px solid #f00 !important; } //Test to verify which component is causing a horizontal overflow

    * { 
        margin: 0; 
        padding: 0; 
        outline: 0;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, button, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        font-family: 'Roboto', sans-serif;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        font-size: 100%;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    * {
        box-sizing: border-box;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
    }
`
export default GlobalStyles