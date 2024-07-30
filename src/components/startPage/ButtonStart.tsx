import React from "react";
import { Button } from "./ButtonStart.styles";
import { useNavigate } from "react-router-dom";

const ButtonStart = () => {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate("/quiz");
  };
  return <Button onClick={goToQuiz}>Start quiz</Button>;
};

export default ButtonStart;
