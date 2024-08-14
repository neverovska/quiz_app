import React from "react";
import { BlockWrapper, BlockTitle, NumberInput } from "./Block.styles";

interface Props {
  title: string;
  minQuestions: number;
  maxQuestions: number;
  value: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
}

const BlockWithInput = ({
  title,
  minQuestions,
  maxQuestions,
  value,
  handler,
  hasError
}: Props) => {
  return (
    <BlockWrapper>
      <BlockTitle>{title}</BlockTitle>
      <NumberInput hasError={hasError}
        type="number"
        placeholder={`${minQuestions}-${maxQuestions}`}
        value={value}
        onChange={handler}
      />
    </BlockWrapper>
  );
};

export default BlockWithInput;
