import React from "react";
import BlockWithMultiSelect from "../components/startPage/BlockWithMultiSelect";
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

const selectFilling = (item: string) => ({ value: item, label: item });

const StartPage = () => {
  const navigate = useNavigate();

  const goToStats = () => {
    navigate("/statistics");
  };
  const goToQuiz = () => {
    navigate("/quiz");
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

      <BlockWithMultiSelect
        title="Category"
        options={CATEGORIES.map(selectFilling)}
      />
      <BlocksContainer>
        <BlockWithSelect title="Time" options={TIMES.map(selectFilling)} />
        <BlockWithSelect
          title="Difficulty"
          options={LEVELS.map(selectFilling)}
        />
        <BlockWithSelect title="Type" options={TYPES.map(selectFilling)} />
        <BlockWithInput
          title="Number of questions"
          minQuestions={5}
          maxQuestions={15}
        />
      </BlocksContainer>
      <ButtonStart onClick={goToQuiz}>Start quiz</ButtonStart>
    </MainWrapper>
  );
};

export default StartPage;
