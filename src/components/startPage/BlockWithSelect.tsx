import React from "react";
import { BlockWrapper, BlockTitle, StylizedSingleSelect } from "./Block.styles";
import { Option } from "../../redux/slices/configurationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { SelectProps } from "../../interfaces";

const BlockWithSelect = ({ title, options, value, handler }: SelectProps) => {
  useAppSelector((state) => state.configuration);
  useAppDispatch();

  return (
    <BlockWrapper>
      <BlockTitle>{title}</BlockTitle>
      <StylizedSingleSelect
        options={options}
        classNamePrefix="Select"
        defaultValue={options.find((option) => option.value === value)}
        onChange={(newValue) => handler(newValue as Option, title)}
      />
    </BlockWrapper>
  );
};
export default BlockWithSelect;
