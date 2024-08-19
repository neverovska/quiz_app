import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Window = styled.div`
  border-radius: 10px;
  background: #404040;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  height: 60vh;
  position: relative;
  padding: 30px 20px 20px 20px;
`;

const IconExit = styled(FontAwesomeIcon)`
  color: #ff3939;
  position: absolute;
  top: 5%;
  left: 4%;

  &:hover {
    color: #ff0000;
  }
`;

const QuestionWrapper = styled.div`
  margin: 10px 0;
`;

const QuestionText = styled.p`
  color: white;
`;

interface AnswersCountProp {
    count: number;
}

const AnswersGroup = styled.ul<AnswersCountProp>`
  display: grid;
  gap: 15px;
  grid-template-rows: ${({ count }) => `repeat(${count / 2}, 1fr)`};
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  padding: 0;
`;

const StyledAnswerButton = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 8vh;
  border-radius: 10px;
  font-size: 18px;
  font-family: "Gill Sans MT";
  border: none;
  background: linear-gradient(
    90deg,
    rgba(59, 49, 242, 1) 0%,
    rgba(116, 28, 236, 1) 100%
  );

  &:hover {
    transition: transform 0.5s;
    transform: scale(1.01);
  }
`;

export { Window, QuestionWrapper, QuestionText, IconExit , AnswersGroup, StyledAnswerButton};
