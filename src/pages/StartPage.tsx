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
import { TIMES, LEVELS, TYPES, CATEGORIES } from "../consts";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { Option } from "../slices/configurationSlice";
import {
  setCategory,
  setDifficulty,
  setNumberOfQuestions,
  setTime,
  setType,
} from "../slices/configurationSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchQuestions } from "../slices/questionsSlice";

const selectFilling = (item: Option) => ({
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

  //TODO: take a look here, mb move to child

  const handleNumberOfQuestionsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = event.target.value;
    const numberValue = Number(inputValue);

    if (numberValue &&(numberValue < 5 || numberValue > 15)) {
      setError(true);
    } else {
      setError(false);
      dispatch(setNumberOfQuestions(inputValue));
    }
  };

  const handleSelectChange = (option: Option, title: string) => {
    if (!option) return;
    switch (title) {
      case "Category":
        dispatch(setCategory(option));
        break;
      case "Type":
        dispatch(setType(option));
        break;
      case "Time":
        dispatch(setTime(option));
        break;
      case "Difficulty":
        dispatch(setDifficulty(option));
        break;
      default:
        break;
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
          options={LEVELS.map(selectFilling)}
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
      <ButtonStart disabled={+configuration.numberOfQuestions === 0} onClick={goToQuiz}>Start quiz</ButtonStart>
    </MainWrapper>
  );
};

export default StartPage;
