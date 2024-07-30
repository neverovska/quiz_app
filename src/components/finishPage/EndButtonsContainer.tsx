import React from "react";
import {
  ChooseButton,
  RestartButton,
  EndButtonsContainerStyled,
} from "./EndButtonsContainer.styles";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EndButtonsContainer = () => {
  return (
    <EndButtonsContainerStyled>
      <RestartButton>
        <FontAwesomeIcon icon={faRotateLeft} />
      </RestartButton>
      <ChooseButton>Choose another quiz</ChooseButton>
    </EndButtonsContainerStyled>
  );
};

export default EndButtonsContainer;