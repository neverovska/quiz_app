import React, {forwardRef} from "react";
import EndBlock from "./EndBlock";
import { EndBlocksContainer } from "./EndBlockGeneral.styles";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const EndBlockContainer = forwardRef<HTMLDivElement, {}>((props,ref) => {
  const configuration = useAppSelector(
    (state: RootState) => state.configuration,
  );
  return (
    <EndBlocksContainer ref={ref}>
      <EndBlock title={"Type"} info={configuration.type} />
      <EndBlock title={"Difficulty"} info={configuration.difficulty} />
      <EndBlock title={"Category"} info={configuration.category} />
      <EndBlock title={"Time"} info={configuration.time} />
    </EndBlocksContainer>
  );
})

export default EndBlockContainer;
