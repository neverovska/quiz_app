import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CATEGORIES, LEVELS, TIMES, TYPES } from "../consts";

export interface Option {
  value: string;
  label: string;
}

//TODO: take a look at time, mb better solution?

export interface ConfigurationState {
  numberOfQuestions: string;
  type: Option;
  difficulty: Option;
  category: Option;
  time: Option;
}

const initialState: ConfigurationState = {
  numberOfQuestions: "",
  type: TYPES[0],
  difficulty: LEVELS[0],
  category: CATEGORIES[0],
  time: TIMES[0],
};

const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setNumberOfQuestions: (state, action: PayloadAction<string>) => {
      state.numberOfQuestions = action.payload;
    },
    setType: (state, action: PayloadAction<Option>) => {
      state.type = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<Option>) => {
      state.difficulty = action.payload;
    },
    setCategory: (state, action: PayloadAction<Option>) => {
      state.category = action.payload;
    },
    setTime: (state, action: PayloadAction<Option>) => {
      state.time = action.payload;
    },

    resetConfiguration: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const {
  setNumberOfQuestions,
  setType,
  setDifficulty,
  setCategory,
  setTime,
  resetConfiguration,
} = configurationSlice.actions;

export default configurationSlice.reducer;
