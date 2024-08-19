import React from "react";
import { PageWrapper } from "./QuizPage.styles";
import TimerLogic from "../components/quizPage/TimerLogic";
import { RootState } from "../redux/store";
import { useAppSelector } from "../redux/hooks";
import QuestionWindow from "../components/quizPage/QuestionWindow";
import Error from "../components/utils/Error";
import Loading from "../components/utils/Loading";
import { MainWrapper } from "../general.styles";

const QuizPage = () => {
  const { questions, loading, error } = useAppSelector(
    (state: RootState) => state.questions,
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error text={`Sorry\n Error :(`} />;
  }
  if (questions.length === 0) {
    return <Error text={`No questions available in such configuration`} />;
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
