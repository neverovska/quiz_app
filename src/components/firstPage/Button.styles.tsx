import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    height: 10vh;
    border-radius: 10px;
    color: white;
    font-size: 26px;
    font-family: "Gill Sans MT";
    font-weight: bold;
    border: none;
    background: linear-gradient(90deg, rgba(15,66,247,1) 0%, rgba(172,7,230,1) 100%);
    &:hover{
      border: 1px solid white;
    }
`