import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.css";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
        font-family: 'Noto Sans KR', sans-serif;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    };
    &::-webkit-scrollbar {
    display: none;
    }
    @media (prefers-color-scheme: dark){
        body {
            background-color: #181818;
        }
    } 
`;

export default GlobalStyle;
