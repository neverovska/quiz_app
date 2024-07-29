import React from "react";
import { BlockWrapper, BlockTitle, StylizedSingleSelect } from "./Block.styles";

interface Props {
  title: string;
  options: Array<object>;
}

const BlockWithSelect = ({ title, options }: Props) => {
  return (
    <BlockWrapper>
      <BlockTitle>{title}</BlockTitle>
      <StylizedSingleSelect options={options} classNamePrefix="Select" />
    </BlockWrapper>
  );
};

export default BlockWithSelect;