import React, { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { incrementTime } from "../../redux/slices/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TimerDisplay from "./TimerDisplay";
import { motion } from "framer-motion";
import { pulseVariants } from "../../framer motion/animations";

const TimerLogic = () => {
  const AnimatedTimerDisplay = motion(TimerDisplay);
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
  const animationVariant = time <= 10 ? "warning" : "normal";
  return (
    <AnimatedTimerDisplay
      variants={pulseVariants}
      initial="normal"
      animate={animationVariant}
      time={time}
    />
  );
};
export default TimerLogic;
