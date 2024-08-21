import React, { forwardRef } from "react";
import { BlockWrapper, BlockTitle, StylizedSingleSelect } from "./Block.styles";
import { Option } from "../../redux/slices/configurationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { SelectProps } from "../../interfaces";

const BlockWithSelect = forwardRef<HTMLDivElement, SelectProps>(
  ({ title, options, value, handler }, ref) => {
    useAppSelector((state) => state.configuration);
    useAppDispatch();
    return (
      <BlockWrapper ref={ref}>
        <BlockTitle>{title}</BlockTitle>
        <StylizedSingleSelect
          options={options}
          classNamePrefix="Select"
          defaultValue={options.find((option) => option.value === value)}
          onChange={(newValue) => handler(newValue as Option, title)}
        />
      </BlockWrapper>
    );
  },
);
export default BlockWithSelect;
