import React from "react";
import EndBlock from "./EndBlock";
import { EndBlocksContainer } from "./EndBlockGeneral.styles";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";

const EndBlockContainer = () => {
  const configuration = useAppSelector(
    (state: RootState) => state.configuration,
  );
  return (
    <EndBlocksContainer>
      <EndBlock title={"Type"} info={configuration.type} />
      <EndBlock title={"Difficulty"} info={configuration.difficulty} />
      <EndBlock title={"Category"} info={configuration.category} />
      <EndBlock title={"Time"} info={configuration.time} />
    </EndBlocksContainer>
  );
};

export default EndBlockContainer;
