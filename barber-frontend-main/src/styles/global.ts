import { createGlobalStyle } from "styled-components";
import createback from "../assets/back242424.jpeg";

export default createGlobalStyle`
  /* Importando a fonte do Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Girassol&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: url(${createback}) 100% no-repeat;
    background-size: cover;
    color: #FFF;
  }

  body, input, button {
    font-family: "Roboto", sans-serif; /* Fonte padrão */
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: "Anton", sans-serif; /* Exemplo de uso para títulos */
    font-weight: 500;
  }

  p {
    font-family: "Girassol", cursive; /* Exemplo de uso para parágrafos */
  }

  button {
    font-family: "Roboto", sans-serif;
    cursor: pointer;
  }
`;
