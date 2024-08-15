import React from "react";
import "./App.css";
import StartPage from "./pages/StartPage";
import QuizPage from "./pages/QuizPage";
import FinishPage from "./pages/FinishPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StatisticsPage from "./pages/StatisticsPage";

function App() {
  return (

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


  );
}

export default App;
