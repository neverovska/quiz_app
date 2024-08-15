import React from "react";
import GoBackButton from "./GoBackButton";
import { ErrorText, UtilsWrapper } from "./Utils.styles";

interface ErrorProps {
  text: string;
}

const Error = ({ text }: ErrorProps) => {
  return (
    <UtilsWrapper>
      <ErrorText>{text}</ErrorText>
      <GoBackButton />
    </UtilsWrapper>
  );
};

export default Error;
