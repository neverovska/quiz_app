import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AsyncThunk,
} from "@reduxjs/toolkit";
import { Question } from "../interfaces";
import { AppDispatch, RootState } from "../store";
import { ConfigurationState } from "./configurationSlice";

interface QuestionState {
  questions: Question[];
  totalNumber: number;
  loading: boolean;
  error: string | null;
}

const initialState: QuestionState = {
  questions: [],
  totalNumber: 0,
  loading: false,
  error: null,
};

export const fetchQuestions: AsyncThunk<
  Question[],
  ConfigurationState,
  { dispatch: AppDispatch; state: RootState }
> = createAsyncThunk("quiz/fetchQuestions", async (configuration) => {
  const { difficulty, numberOfQuestions, type, category } = configuration;

  const difficultyValue = difficulty.value;
  const typeValue = type.value;
  const categoryValue = category.value;

  const response = await fetch(
    `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${categoryValue}&difficulty=${difficultyValue}&type=${typeValue}`,
  );
  const data = await response.json();
  return data.results;
});

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    removeQuestions(state) {
      state.questions = [];
      state.totalNumber = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchQuestions.fulfilled,
        (state, action: PayloadAction<Question[]>) => {
          state.loading = false;
          state.questions = action.payload;
          state.totalNumber = action.payload.length;
        },
      )
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch questions";
      });
  },
});

export default questionsSlice.reducer;
export const { removeQuestions } = questionsSlice.actions;
