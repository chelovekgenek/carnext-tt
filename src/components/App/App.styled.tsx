import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    min-width: 1200px;
    font-family: Arial, Helvetica, sans-serif;
  }
`
