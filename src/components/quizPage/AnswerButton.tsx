import React from 'react';
import {StyledAnswerButton} from "./AnswerButton.styles";

interface AnswerProps{
    answer: string
}
const AnswerButton = ({answer}:AnswerProps) => {
    return (
        <StyledAnswerButton>
            {answer}
        </StyledAnswerButton>
    );
};

export default AnswerButton;