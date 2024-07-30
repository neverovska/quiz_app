import React, { useState } from "react";
import {
  Window,
  QuestionText,
  QuestionWrapper,
  IconExit,
} from "./QuestionWindow.styles";
import AnswersContainer from "./AnswersContainer";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "./ProgressBar";

type Question = {
  qText: string;
  answers: object;
  category: string;
};

interface QuestionProps {
  questions: Array<Question>;
  currentQ: number;
}

const QuestionWindow = ({ questions, currentQ }: QuestionProps) => {
  const { qText, answers } = questions[currentQ];

  return (
    <Window>
      <QuestionWrapper>
        <IconExit icon={faXmark} />
        <ProgressBar currentQ={currentQ} totalQ={questions.length} />
        <QuestionText>{qText}</QuestionText>
      </QuestionWrapper>
      <AnswersContainer count={Object.keys(answers).length} answers={answers} />
    </Window>
  );
};

export default QuestionWindow;