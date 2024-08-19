import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import configurationReducer from "./slices/configurationSlice";
import questionsReducer from "./slices/questionsSlice";
import scoreReducer from "./slices/scoreSlice"
import statisticsSlice from "./slices/statisticsSlice";


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['configuration', 'questions', 'score'], 
};
const rootReducer = combineReducers({
    configuration: configurationReducer,
    score: scoreReducer,
    questions: questionsReducer,
    statistics: statisticsSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;