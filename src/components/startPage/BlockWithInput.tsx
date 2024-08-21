import React, {forwardRef} from "react";
import { BlockWrapper, BlockTitle, NumberInput } from "./Block.styles";

interface InputProps {
  title: string;
  minQuestions: number;
  maxQuestions: number;
  value: string;
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
}

const BlockWithInput = forwardRef<HTMLDivElement, InputProps>(({
  title,
  minQuestions,
  maxQuestions,
  value,
  handler,
  hasError
}, ref) => {
  return (
    <BlockWrapper ref={ref}>
      <BlockTitle>{title}</BlockTitle>
      <NumberInput hasError={hasError}
        type="number"
        placeholder={`${minQuestions}-${maxQuestions}`}
        value={value}
        onChange={handler}
      />
    </BlockWrapper>
  );
});

export default BlockWithInput;
