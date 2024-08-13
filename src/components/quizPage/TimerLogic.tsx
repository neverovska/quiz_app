import React, { useEffect } from "react";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { incrementTime } from "../../slices/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TimerDisplay from "./TimerDisplay";

const TimerLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const timeSpent = useSelector((state: RootState) => state.score.timeSpent);
  const timeLeft = useAppSelector(
    (state: RootState) => +state.configuration.time.value,
  );

  useEffect(() => {
    if (timeSpent < timeLeft) {
      const timerId = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);

      return () => clearInterval(timerId);
    } else if (timeSpent === timeLeft) {
      navigate("/results");
      return;
    }
  }, [timeLeft, navigate, timeSpent, dispatch]);
  const time = timeLeft - timeSpent;
  return <TimerDisplay time={time} />;
};
export default TimerLogic;
