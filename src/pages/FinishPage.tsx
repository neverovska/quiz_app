import React from "react";
import { MainWrapper } from "../general.styles";
import EndBlockContainer from "../components/finishPage/EndBlockContainer";
import EndButtonsContainer from "../components/finishPage/EndButtonsContainer";
import { Gratitude, Result } from "./FinishPage.styles";
import {useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import TimerDisplay from "../components/quizPage/TimerDisplay";
import {motion} from "framer-motion";
import {containerVariants, itemVariants} from "../framer motion/animations";


const AnimatedMainWrapper = motion(MainWrapper);
const AnimatedGratitude = motion(Gratitude);
const AnimatedResult = motion(Result);
const AnimatedTimerDisplay = motion(TimerDisplay);
const AnimatedEndBlockContainer = motion(EndBlockContainer);
const AnimatedEndButtonsContainer = motion(EndButtonsContainer);

const FinishPage = () => {
  const score = useAppSelector((state: RootState) => state.score);
  const questions = useAppSelector((state: RootState) => state.questions);
  const time = score.timeSpent;

  return (
    <AnimatedMainWrapper variants={containerVariants}
                         initial="hidden"
                         animate="visible">
      <AnimatedGratitude variants={itemVariants}
                         initial="hidden"
                         animate="visible">Thank you for completing this quiz!</AnimatedGratitude>
      <AnimatedResult variants={itemVariants}
                      >{`Your results: ${score.score}/${questions.totalNumber}`}</AnimatedResult>
      <AnimatedTimerDisplay variants={itemVariants} time={time} />
      <AnimatedEndBlockContainer variants={itemVariants}/>
      <AnimatedEndButtonsContainer variants={itemVariants} />
    </AnimatedMainWrapper>
  );
};

export default FinishPage;
