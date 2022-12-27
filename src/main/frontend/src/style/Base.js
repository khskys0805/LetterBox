import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts/pretendard.css";

export const GlobalStyle = createGlobalStyle`
${reset}
    body{
        font-family: Pretendard;
        font-weight: 700;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }

    button{
        cursor: pointer;
    }
`;
