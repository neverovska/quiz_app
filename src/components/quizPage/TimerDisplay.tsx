import React, {forwardRef} from "react";
import { IconTime, TimerP } from "./Timer.styles";
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons";

interface TimerProps {
  time: number;
}

const TimerDisplay =  forwardRef<HTMLParagraphElement, TimerProps>(({ time }, ref) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - Math.floor(time / 60) * 60;
  const formatTime = (time: number): string =>
    time < 10 ? `0${time}` : `${time}`;
  return (
    <TimerP ref={ref}>
      <IconTime icon={faHourglassEnd} />
      {`${formatTime(minutes)}:${formatTime(seconds)}`}{" "}
    </TimerP>
  );
})

export default TimerDisplay;
