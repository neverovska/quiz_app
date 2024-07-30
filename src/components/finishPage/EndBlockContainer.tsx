import React from "react";
import EndBlock from "./EndBlock";
import { EndBlocksContainer } from "./EndBlockGeneral.styles";

const EndBlockContainer = () => {
  return (
    <EndBlocksContainer>
      <EndBlock title={"Type"} info={"1type"} />
      <EndBlock title={"Difficulty"} info={"Medium"} />
      <EndBlock title={"Category"} info={"1cat"} />
      <EndBlock title={"Time"} info={"5 min"} />
    </EndBlocksContainer>
  );
};

export default EndBlockContainer;