import React, { useState } from "react";
import { MainWrapper, PageWrapper } from "./QuizPage.styles";
import Timer from "./Timer";
import QuestionWindow from "./QuestionWindow";
import { questions } from "../../consts";

const QuizPage = () => {
  const [currentQ, setCurrentQ] = useState(0); // TODO: move state logic to redux store

  return (
    <PageWrapper>
      <MainWrapper>
        <Timer seconds={299} />
        <QuestionWindow questions={questions} currentQ={currentQ} />
      </MainWrapper>
    </PageWrapper>
  );
};

export default QuizPage;