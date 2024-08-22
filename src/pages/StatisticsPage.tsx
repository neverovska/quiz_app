import React, { useState } from "react";
import StatisticsBlock from "../components/statisticsPage/StatisticsBlock";
import GoBackButton from "../components/utils/GoBackButton";
import { MainWrapper } from "../general.styles";
import { CATEGORIES, DIFFICULTIES, TYPES } from "../consts";
import { selectFilling } from "./StartPage";
import { AnsweredText, IconCup, ResultsText } from "./StatisticsPage.styles";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../redux/hooks";
import { Option } from "../redux/slices/configurationSlice";
import { StatisticsState } from "../redux/slices/statisticsSlice";

const StatisticsPage = () => {
  const statistics = useAppSelector((state) => state.statistics);
  const [categoryCount, setCategoryCount] = useState(0);
  const [typeCount, setTypeCount] = useState(0);
  const [difficultyCount, setDifficultyCount] = useState(0);

  const handleSelectChange = (option: Option, title: string) => {
    if (!option) return;
    type StatisticsAnswersState = Omit<
      StatisticsState,
      "totalCorrectAnswers" | "totalAnswers"
    >;
    const titleToKeyMap: Record<string, keyof StatisticsAnswersState> = {
      category: "categoryAnswers",
      type: "typeAnswers",
      difficulty: "difficultyAnswers",
    };

    const updateFunctions: Record<
      keyof StatisticsAnswersState,
      React.Dispatch<React.SetStateAction<number>>
    > = {
      categoryAnswers: setCategoryCount,
      typeAnswers: setTypeCount,
      difficultyAnswers: setDifficultyCount,
    };
    const key = titleToKeyMap[title];
    const selectedCount = statistics[key][option.value];

    updateFunctions[key](selectedCount);
  };
  return (
    <MainWrapper>
      <ResultsText>Your statistics</ResultsText>
      <AnsweredText>
        You answered:
        <span>
          {statistics.totalCorrectAnswers}/{statistics.totalAnswers}
        </span>
        <IconCup icon={faTrophy} />
      </AnsweredText>
      <StatisticsBlock
        title={"category"}
        options={CATEGORIES.map(selectFilling)}
        handler={handleSelectChange}
        count={categoryCount}
      />
      <StatisticsBlock
        title={"type"}
        options={TYPES.map(selectFilling)}
        handler={handleSelectChange}
        count={typeCount}
      />
      <StatisticsBlock
        title={"difficulty"}
        options={DIFFICULTIES.map(selectFilling)}
        handler={handleSelectChange}
        count={difficultyCount}
      />
      <GoBackButton />
    </MainWrapper>
  );
};

export default StatisticsPage;
