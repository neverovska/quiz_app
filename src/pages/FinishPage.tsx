import React from "react";
import Timer from "../components/quizPage/Timer";
import { MainWrapper } from "../general.styles";
import EndBlockContainer from "../components/finishPage/EndBlockContainer";
import EndButtonsContainer from "../components/finishPage/EndButtonsContainer";
import { Gratitude, Result } from "./FinishPage.styles";

interface FinishPageProps {
  correctAnswers: number;
  totalQ: number;
  timeCompleted: number;
}

const FinishPage = ({
  correctAnswers,
  totalQ,
  timeCompleted,
}: FinishPageProps) => {
  return (
    <MainWrapper>
      <Gratitude>Thank you for completing this quiz!</Gratitude>
      <Result>{`Your results: ${correctAnswers}/${totalQ}`}</Result>
      <Timer seconds={timeCompleted} />
      <EndBlockContainer />
      <EndButtonsContainer />
    </MainWrapper>
  );
};

export default FinishPage;
