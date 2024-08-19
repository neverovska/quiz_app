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

export const selectFilling = (item: Option) => ({
  value: item.value,
  label: item.label,
});

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
    <MainWrapper>
      <GreetingsContainer>
        <Greetings>Let's play!</Greetings>
        <Statistics onClick={goToStats}>
          My stats
          <IconStats icon={faChartSimple} />
        </Statistics>
      </GreetingsContainer>

      <BlockWithSelect
        title="Category"
        options={CATEGORIES.map(selectFilling)}
        value={configuration.category.value}
        handler={handleSelectChange}
      />
      <BlocksContainer>
        <BlockWithSelect
          title="Time"
          options={TIMES.map(selectFilling)}
          value={configuration.time.value}
          handler={handleSelectChange}
        />
        <BlockWithSelect
          title="Difficulty"
          options={DIFFICULTIES.map(selectFilling)}
          value={configuration.difficulty.value}
          handler={handleSelectChange}
        />
        <BlockWithSelect
          title="Type"
          options={TYPES.map(selectFilling)}
          value={configuration.type.value}
          handler={handleSelectChange}
        />
        <BlockWithInput
          title="Number of questions"
          minQuestions={5}
          maxQuestions={15}
          value={configuration.numberOfQuestions}
          handler={handleNumberOfQuestionsChange}
          hasError={isError}
        />
      </BlocksContainer>
      <ButtonStart
        disabled={+configuration.numberOfQuestions === 0}
        onClick={goToQuiz}
      >
        Start quiz
      </ButtonStart>
    </MainWrapper>
  );
};

export default StartPage;
