import React from "react";
import { EndBlockInfo, EndBlockTitle } from "./EndBlockGeneral.styles";
import { EndBlockStyled } from "./EndBlockGeneral.styles";
import { Option } from "../../redux/slices/configurationSlice";

interface EndBlockProp {
  title: string;
  info: Option;
}

const EndBlock = ({ title, info }: EndBlockProp) => {
  return (
    <EndBlockStyled>
      <EndBlockTitle>{title}</EndBlockTitle>
      <EndBlockInfo>{info.label}</EndBlockInfo>
    </EndBlockStyled>
  );
};

export default EndBlock;
