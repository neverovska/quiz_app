import React from "react";
import { EndBlockInfo, EndBlockTitle } from "./EndBlockGeneral.styles";
import { EndBlockStyled } from "./EndBlockGeneral.styles";

interface EndBlockProp {
  title: string;
  info: string;
}

const EndBlock = ({ title, info }: EndBlockProp) => {
  return (
    <EndBlockStyled>
      <EndBlockTitle>{title}</EndBlockTitle>
      <EndBlockInfo>{info}</EndBlockInfo>
    </EndBlockStyled>
  );
};

export default EndBlock;