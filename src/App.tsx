import React from "react";
import "./App.css";
import StartPage from "./pages/StartPage";
import QuizPage from "./pages/QuizPage";
import FinishPage from "./pages/FinishPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StatisticsPage from "./pages/StatisticsPage";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route
              path="/results"
              element={
                <FinishPage
                />
              }
            />
            <Route path="/statistics" element={<StatisticsPage />} />
          </Routes>
        </BrowserRouter>
      </div>

    </Provider>
  );
}

export default App;
