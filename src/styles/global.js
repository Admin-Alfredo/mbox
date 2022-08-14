import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  :root{
    --bg-color: #181716;
    --color-title-font: #fff;
    --color-icons: #ffffff;
    --color-paragrafy-font: #d6d3f0;
    --bg-component: #392b65;
    --bg-component-gray: #222222;
    --bg-component-light: #8e73dec9;
    }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: var(--color-title-font);
  }
  html, body, #root{
    height: 100%;
    background-color:var(--bg-color);
    overflow-y: auto;
    &::-webkit-scrollbar-thumb{
      background-color:#333 ;
      border-radius: 4px;
    }
    &::-webkit-scrollbar{
      width: 5px;
    }
  }
  #root::-webkit-scrollbar-thumb{
       width:5px ;
    }
  *, input, button{
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    color: var(--color-title-font)
  }
  a{
    text-decoration: none;
  }
`