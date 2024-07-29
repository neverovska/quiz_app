import React from 'react';
import {IconTime, TimerP} from "./Timer.styles";
import {faHourglassEnd} from "@fortawesome/free-solid-svg-icons"


interface TimerProps {
    seconds: number;
}

const Timer = ({seconds}: TimerProps) => {
    return (
        <TimerP>
            <IconTime icon={faHourglassEnd}/>
            {`0${Math.floor(seconds / 60)}:${seconds - Math.floor(seconds / 60) * 60}`}
        </TimerP>
    );
};

export default Timer;