import React from "react";
import { StylizedSingleSelect } from "../startPage/Block.styles";
import { Option } from "../../redux/slices/configurationSlice";
import {
  RowWrapper,
  StatisticsText,
  StatisticsWrapper,
} from "../../pages/StatisticsPage.styles";

interface StatisticsBlockProps {
  title: string;
  options: Option[];
  handler: (option: Option, title: string) => void;
  count: number;
}

const StatisticsBlock = ({
  title,
  options,
  handler,
  count,
}: StatisticsBlockProps) => {
  return (
    <StatisticsWrapper>
      <RowWrapper>
        <StatisticsText>In {title}</StatisticsText>
        <StylizedSingleSelect
          options={options}
          classNamePrefix="Select"
          onChange={(newValue) => handler(newValue as Option, title)}
        />
      </RowWrapper>
      <StatisticsText>
        you took <span>{count}</span> questions
      </StatisticsText>
    </StatisticsWrapper>
  );
};

export default StatisticsBlock;
