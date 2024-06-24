import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000;
}
html{
    font-size: 62.5%;
    font-family: "Noto Sans Georgian", sans-serif;
}

body {
    background: #F9F9F9;
}

button{
    font-family: "Noto Sans Georgian", sans-serif;  
    
}
input{
    font-family: "Noto Sans Georgian", sans-serif;  
}
`;
