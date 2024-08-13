import React from "react";
import { StyledAnswerButton } from "./AnswerButton.styles";
import { useNavigate } from "react-router-dom";

interface AnswerProps {
  answer: string;
}
// TODO: delete
const AnswerButton = ({ answer }: AnswerProps) => {
  const navigate = useNavigate();

  const goToFinish = () => {
    navigate("/results");
  };
  return <StyledAnswerButton onClick={goToFinish}>{answer}</StyledAnswerButton>;
};

export default AnswerButton;
