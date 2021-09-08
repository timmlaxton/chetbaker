import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #070707;
  font-family: "Rubik", sans-serif;
  overflow-x: hidden;
}
html {
  font-size: 75%;
}

button {
  font-family: "Rubik", sans-serif;
  font-weight: bold;
  font-size: 1.1 rem;
  cursor: pointer;
  padding: 1rem, 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: #fff;
  transition: all 0.5s ease;

  &:hover{
    background-color: #23d997;
    color: #fff
  }
 
}

h2{
  color: #ccc;
    font-weight: lighter;
    font-size: 4rem;
  }
  h3{
    color: #fff;
  }
  h4 {
    font-weight: bold;
    font-size: 2rem; 
  }
  p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }

  span{
    font-weight: bold;
    color: #23d997
  }
  a{
    font-size: 1.1.rem;
  }

  `;

export default GlobalStyle;
