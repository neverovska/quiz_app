import React from "react";
import { MainWrapper, PageWrapper } from "./QuizPage.styles";
import TimerLogic from "../components/quizPage/TimerLogic";
import { RootState } from "../store";
import { useAppSelector } from "../hooks";
import QuestionWindow from "../components/quizPage/QuestionWindow";

const QuizPage = () => {
  const { questions, loading, error } = useAppSelector(
    (state: RootState) => state.questions,
  );

  //TODO: add UI
  if (loading) {
    return <div> Loading...</div>;
  }
  if (error) {
    return <div>Error :(</div>;
  }
  if (questions.length === 0) {
    return <div>No questions available in such configuration</div>;
  }
  return (
    <PageWrapper>
      <MainWrapper>
        <TimerLogic />
        <QuestionWindow questions={questions} />
      </MainWrapper>
    </PageWrapper>
  );
};

export default QuizPage;
