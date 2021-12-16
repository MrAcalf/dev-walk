import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --mra-green: #37c8ab;
        --mra-black: #1a1a1a;
        --white: #fff;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    html {
        /* 10 px per rem */
        font-size: 62.5%;
    }

    html, body {
      font-family: source-sans-pro,sans-serif;
      font-weight: 400;
      font-style: normal;
      height: 100vh;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiazed;
      font-kerning: normal;
      font-variant-ligatures: common-ligatures contextual;
      -moz-font-feature-settings: "kern", "liga", "clig", "calt";
      -ms-font-feature-settings: "kern", "liga", "clig", "calt";
      -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
      font-feature-settings: "kern", "liga", "clig", "calt";
      position: relative;
    }

    body {
        font-size: 1.8rem;
        line-height: 2.6rem;
        letter-spacing: 0.1rem;
        background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%),
        radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%,
        rgba(0,0,0,0.50) 100%);
        background-blend-mode: screen;
        color: var(--mra-black);
    }

    p {
        font-size: 2rem;
        line-height: 3rem;
        margin-bottom: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: montserrat, sans-serif;
      font-weight: 800;
      font-style: normal;
      margin-bottom: 2rem;
    }

    h6 {
        font-size: 2rem;
        line-height: 3rem;
    }

    h5 {
        font-size: 2.4rem;
        line-height: 3.6rem;
    }

    h4 {
        font-size: 2.8rem;
        line-height: 4.2rem;
    }

    h3 {
        font-size: 3.2rem;
        line-height: 4.8rem;
    }

    h2 {
        font-size: 3.6rem;
        line-height: 5.4rem;
    }

    h1 {
        font-size: 5rem;
        line-height: 7.5rem;
    }
`
