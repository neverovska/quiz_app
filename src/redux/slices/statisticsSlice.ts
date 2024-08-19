import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CATEGORIES, DIFFICULTIES, TYPES } from "../../consts";
import { Option } from "./configurationSlice";

export interface StatisticsState {
  totalCorrectAnswers: number;
  totalAnswers: number;
  categoryAnswers: {
    [key: string]: number;
  };
  difficultyAnswers: {
    [key: string]: number;
  };
  typeAnswers: {
    [key: string]: number;
  };
}

const createInitialState = (items: Option[]): Record<string, number> => {
  return items.reduce(
    (acc, item) => {
      acc[item.value] = 0;
      return acc;
    },
    {} as Record<string, number>,
  );
};

const initialState: StatisticsState = {
  totalCorrectAnswers: 0,
  totalAnswers: 0,
  categoryAnswers: createInitialState(CATEGORIES),
  difficultyAnswers: createInitialState(DIFFICULTIES),
  typeAnswers: createInitialState(TYPES),
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    addCorrectAnswers: (state) => {
      state.totalCorrectAnswers++;
    },
    addTotalAnswers: (state) => {
      state.totalAnswers++;
    },
    addCategoryAnswers: (state, action: PayloadAction<Option>) => {
      state.categoryAnswers[action.payload.value]++;
    },
    addDifficultyAnswers: (state, action: PayloadAction<Option>) => {
      state.difficultyAnswers[action.payload.value]++;
    },
    addTypeAnswers: (state, action: PayloadAction<Option>) => {
      state.typeAnswers[action.payload.value]++;
    },
  },
});

export const {
  addCorrectAnswers,
  addTotalAnswers,
  addCategoryAnswers,
  addDifficultyAnswers,
  addTypeAnswers,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
