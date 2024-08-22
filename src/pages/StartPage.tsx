import React, { useState } from "react";
import BlockWithSelect from "../components/startPage/BlockWithSelect";
import BlockWithInput from "../components/startPage/BlockWithInput";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import {
  Greetings,
  BlocksContainer,
  Statistics,
  GreetingsContainer,
  IconStats,
  ButtonStart,
} from "./StartPage.styles";
import { MainWrapper } from "../general.styles";
import { TIMES, DIFFICULTIES, TYPES, CATEGORIES } from "../consts";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { Option } from "../redux/slices/configurationSlice";
import {
  setCategory,
  setDifficulty,
  setNumberOfQuestions,
  setTime,
  setType,
} from "../redux/slices/configurationSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchQuestions } from "../redux/slices/questionsSlice";
import { motion } from "framer-motion";
import {containerVariants, itemVariants} from "../framer motion/animations"

export const selectFilling = (item: Option) => ({
  value: item.value,
  label: item.label,
});


const AnimatedMainWrapper = motion(MainWrapper);
const AnimatedBlockWithSelect = motion(BlockWithSelect);
const AnimatedBlocksContainer = motion(BlocksContainer);
const AnimatedBlockWithInput = motion(BlockWithInput);
const AnimatedButtonStart = motion(ButtonStart);
const AnimatedGreetings = motion(Greetings);
const AnimatedStatistics = motion(Statistics);

const StartPage = () => {
  const navigate = useNavigate();
  const [isError, setError] = useState<boolean>(false);

  const goToStats = () => {
    navigate("/statistics");
  };
  const goToQuiz = () => {
    dispatch(
      fetchQuestions({
        numberOfQuestions: configuration.numberOfQuestions,
        category: configuration.category,
        difficulty: configuration.difficulty,
        type: configuration.type,
        time: configuration.time,
      }),
    );
    navigate("/quiz");
  };

  const configuration = useAppSelector(
    (state: RootState) => state.configuration,
  );
  const dispatch = useAppDispatch();

  const handleNumberOfQuestionsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;
    const numberValue = Number(inputValue);

    if (numberValue && (numberValue < 5 || numberValue > 15)) {
      setError(true);
    } else {
      setError(false);
      dispatch(setNumberOfQuestions(inputValue));
    }
  };

  const dispatchFunctions = {
    Category: setCategory,
    Type: setType,
    Time: setTime,
    Difficulty: setDifficulty,
  };

  const handleSelectChange = (option: Option, title: string) => {
    if (!option) return;

    const dispatchFunction =
      dispatchFunctions[title as keyof typeof dispatchFunctions];

    if (dispatchFunction) {
      dispatch(dispatchFunction(option));
    }
  };

  return (
    <AnimatedMainWrapper
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <GreetingsContainer>
        <AnimatedGreetings variants={itemVariants}
                           initial="hidden"
                           animate="visible">Let's play!</AnimatedGreetings>
        <AnimatedStatistics variants={itemVariants} onClick={goToStats}>
          My stats
          <IconStats icon={faChartSimple} />
        </AnimatedStatistics>
      </GreetingsContainer>

      <AnimatedBlockWithSelect
        title="Category"
        options={CATEGORIES.map(selectFilling)}
        value={configuration.category.value}
        handler={handleSelectChange}
        variants={itemVariants}
      />
      <AnimatedBlocksContainer >
        <AnimatedBlockWithSelect
          title="Time"
          options={TIMES.map(selectFilling)}
          value={configuration.time.value}
          handler={handleSelectChange}
          variants={itemVariants}
        />
        <AnimatedBlockWithSelect
          title="Difficulty"
          options={DIFFICULTIES.map(selectFilling)}
          value={configuration.difficulty.value}
          handler={handleSelectChange}
          variants={itemVariants}
        />
        <AnimatedBlockWithSelect
          title="Type"
          options={TYPES.map(selectFilling)}
          value={configuration.type.value}
          handler={handleSelectChange}
          variants={itemVariants}
        />
        <AnimatedBlockWithInput
          title="Number of questions"
          minQuestions={5}
          maxQuestions={15}
          value={configuration.numberOfQuestions}
          handler={handleNumberOfQuestionsChange}
          hasError={isError}
          variants={itemVariants}
        />
      </AnimatedBlocksContainer>
      <AnimatedButtonStart
        disabled={+configuration.numberOfQuestions === 0}
        onClick={goToQuiz}
        variants={itemVariants}
      >
        Start quiz
      </AnimatedButtonStart>
    </AnimatedMainWrapper>
  );
};

export default StartPage;
