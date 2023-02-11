import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, #807ece 0%, #8e7ece 100%);
  display: grid;
  place-items: center;        
    }
    body * {
  font-family: "Rubik", sans-serif;
  letter-spacing: -0.02em;
} 

`;
