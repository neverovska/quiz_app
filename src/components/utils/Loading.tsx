import React from "react";
import { spinnerVariants } from "../../framer motion/animations";
import { LoadingContainer, Spinner } from "./Utils.styles";

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner variants={spinnerVariants} initial="initial" animate="animate" />
    </LoadingContainer>
  );
};

export default Loading;
