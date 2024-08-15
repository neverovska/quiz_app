import { createSlice} from "@reduxjs/toolkit";


interface ScoreState {
  score: number;
  timeSpent: number;
}

const initialState: ScoreState = {
  score: 0,
  timeSpent: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    scoreIncrement: (state) => {
      state.score++;
    },
    incrementTime: (state) => {
        state.timeSpent += 1;
    },
    resetScore: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { scoreIncrement, incrementTime, resetScore } = scoreSlice.actions;

export default scoreSlice.reducer;
