import React from "react";
import { BlockWrapper, BlockTitle, StylizedSingleSelect } from "./Block.styles";
import { Option } from "../../slices/configurationSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

interface Props {
  title: string;
  options: Array<Option>;
  value: string | undefined;

  handler: (option: Option, title: string) => void;
}

const BlockWithSelect = ({ title, options, value, handler }: Props) => {
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
