import React from "react";
import {
  ChooseButton,
  RestartButton,
  EndButtonsContainerStyled,
} from "./EndButtonsContainer.styles";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const EndButtonsContainer = () => {
  const navigate = useNavigate();

  const goToStart = () => {
    navigate("/");
  };

  const restartQuiz = () =>{
      navigate("/quiz");
  }

  return (
    <EndButtonsContainerStyled>
      <RestartButton onClick={restartQuiz}>
        <FontAwesomeIcon icon={faRotateLeft} />
      </RestartButton>
      <ChooseButton onClick={goToStart}>Choose another quiz</ChooseButton>
    </EndButtonsContainerStyled>
  );
};

export default EndButtonsContainer;
