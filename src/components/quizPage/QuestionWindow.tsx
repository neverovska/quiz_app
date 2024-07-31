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
import ModalWindow from "../modalWindow/ModalWindow";

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
  const totalQ = questions.length;
  const { qText, answers } = questions[currentQ];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <Window>
      <QuestionWrapper>
        <IconExit icon={faXmark} onClick={openModal} />
        {isModalOpen && <ModalWindow onClose={closeModal} />}
        <ProgressBar currentQ={currentQ} totalQ={totalQ} />
        <QuestionText>{qText}</QuestionText>
      </QuestionWrapper>
      <AnswersContainer count={Object.keys(answers).length} answers={answers} />
    </Window>
  );
};

export default QuestionWindow;
