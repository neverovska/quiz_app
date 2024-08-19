import React, { useState } from "react";
import {
  Window,
  QuestionText,
  QuestionWrapper,
  IconExit,
} from "./QuestionWindow.styles";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ModalWindow from "../modalWindow/ModalWindow";
import { StyledAnswerButton, AnswersGroup } from "./QuestionWindow.styles";
import { useNavigate } from "react-router-dom";
import { decode } from "html-entities";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { Question } from "../../interfaces";
import { scoreIncrement } from "../../redux/slices/scoreSlice";
import ProgressBar from "./ProgressBar";
import {
  addCategoryAnswers,
  addCorrectAnswers,
  addDifficultyAnswers,
  addTotalAnswers,
  addTypeAnswers,
} from "../../redux/slices/statisticsSlice";

interface QuestionProps {
  questions: Question[];
}

const shuffleAnswers = (question: Question) => {
  const allAnswers = [
    { text: question.correct_answer, isCorrect: true },
    ...question.incorrect_answers.map((answer) => ({
      text: answer,
      isCorrect: false,
    })),
  ];
  for (let i = allAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
  }

  return allAnswers;
};
const QuestionWindow = ({ questions }: QuestionProps) => {
  const totalQ = useAppSelector(
    (state: RootState) => state.questions.totalNumber,
  );
  const [currentQ, setCurrentQ] = useState(0);
  const answers = shuffleAnswers(questions[currentQ]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const configuration = useAppSelector((state) => state.configuration);

  const goToNext = (answerFlag: boolean) => {
    if (answerFlag) {
      dispatch(scoreIncrement());
      dispatch(addCorrectAnswers());
    }
    dispatch(addTotalAnswers());
    dispatch(addCategoryAnswers(configuration.category));
    dispatch(addDifficultyAnswers(configuration.difficulty));
    dispatch(addTypeAnswers(configuration.type));
    questions.length === currentQ + 1
      ? navigate("/results")
      : setCurrentQ((prev) => prev + 1);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <Window>
      <QuestionWrapper>
        <IconExit icon={faXmark} onClick={openModal} />
        {isModalOpen && <ModalWindow onClose={closeModal} />}
        <ProgressBar currentQ={currentQ} totalQ={totalQ} />
        <QuestionText>{decode(questions[currentQ].question)}</QuestionText>
      </QuestionWrapper>
      <AnswersGroup count={Object.keys(answers).length}>
        {Object.values(answers).map((answer) => (
          <StyledAnswerButton
            key={answer.text}
            onClick={() => goToNext(answer.isCorrect)}
          >
            {decode(answer.text)}
          </StyledAnswerButton>
        ))}
      </AnswersGroup>
    </Window>
  );
};

export default QuestionWindow;
