import React from "react";
import {
  ChooseButton,
  RestartButton,
  EndButtonsContainerStyled,
} from "./EndButtonsContainer.styles";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetConfiguration } from "../../redux/slices/configurationSlice";
import { fetchQuestions, removeQuestions } from "../../redux/slices/questionsSlice";
import { resetScore } from "../../redux/slices/scoreSlice";

const EndButtonsContainer = () => {
  const navigate = useNavigate();

  const configuration = useAppSelector((state) => state.configuration);
  const dispatch = useAppDispatch();

  const goToStart = () => {
    dispatch(removeQuestions());
    dispatch(resetConfiguration());
    dispatch(resetScore());
    navigate("/");
  };

  const restartQuiz = () => {
    dispatch(
      fetchQuestions({
        numberOfQuestions: configuration.numberOfQuestions,
        category: configuration.category,
        difficulty: configuration.difficulty,
        type: configuration.type,
        time: configuration.time,
      }),
    );
    dispatch(resetScore());
    navigate("/quiz");
  };

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
