import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
    box-sizing: border-box;
}
body {
    // background: pink; 
    background: ${({theme}) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15rem;
    margin: 0;
}
p {
    opacity: o.6;
    line-height: 1.5;
}

img {
    max-width: 100%;
}
`