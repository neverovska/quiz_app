import { configureStore } from '@reduxjs/toolkit'
import configurationReducer from "./slices/configurationSlice";
import questionsReducer from "./slices/questionsSlice";
import scoreReducer from "./slices/scoreSlice"


export const store = configureStore({
    reducer: {
        configuration: configurationReducer,
        questions: questionsReducer,
        score: scoreReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;