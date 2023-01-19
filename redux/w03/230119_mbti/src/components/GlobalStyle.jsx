import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'KIMM_Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KIMM_Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
body {
font-family: 'KIMM_Bold', "Arial", sans-serif;
padding-top: 1em;
white-space: pre-wrap;
}

ul, ol {
list-style: none;
padding-left: 0px;
}
`;

export default GlobalStyle;
