import styled from "styled-components";

const StyledAnswerButton = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 8vh;
  border-radius: 10px;
  font-size: 22px;
  font-family: "Gill Sans MT";
  border: none;
  background: linear-gradient(90deg, rgba(59,49,242,1) 0%, rgba(116,28,236,1) 100%);
  &:hover {
    transition: transform 0.5s;
    transform: scale(1.01);
  }
`;

export {StyledAnswerButton};