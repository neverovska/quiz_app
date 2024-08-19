import React from "react";
import { useNavigate } from "react-router-dom";
import { GoBackButtonStyled } from "./Utils.styles";

const GoBackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return <GoBackButtonStyled onClick={goBack}>Go back</GoBackButtonStyled>;
};

export default GoBackButton;