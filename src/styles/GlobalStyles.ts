import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        color: var(--white);
    }
    html, body, #root{
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }
    *, button, input{
        border: 0;
        background: none;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
    }
    html{
        color: var(--primary);
    }
    :root{
        --primary: #000;
        --secondary: #15181C;
        --search: #202327;
        --white: #d9d9d9;
        --gray: #7a7a7a;
        --outline: #2f3336;
        --retweet: #00c06b;
        --like: #f336;
        --twitter: #1967d2;
        --twitter-dark-hover: #011017;
        --twitter-light-hover: #2C8ED6;
    }
`;
