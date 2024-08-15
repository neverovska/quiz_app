import React from "react";
import { MainWrapper } from "../general.styles";
import EndBlockContainer from "../components/finishPage/EndBlockContainer";
import EndButtonsContainer from "../components/finishPage/EndButtonsContainer";
import { Gratitude, Result } from "./FinishPage.styles";
import {useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import TimerDisplay from "../components/quizPage/TimerDisplay";

const FinishPage = () => {
  const score = useAppSelector((state: RootState) => state.score);
  const questions = useAppSelector((state: RootState) => state.questions);
  const time = score.timeSpent;

  return (
    <MainWrapper>
      <Gratitude>Thank you for completing this quiz!</Gratitude>
      <Result>{`Your results: ${score.score}/${questions.totalNumber}`}</Result>
      <TimerDisplay time={time} />
      <EndBlockContainer />
      <EndButtonsContainer />
    </MainWrapper>
  );
};

export default FinishPage;
