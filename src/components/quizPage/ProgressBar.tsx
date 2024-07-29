import React from 'react';
import {ProgressBarStyled} from "./ProgressBar.styles";

interface ProgressProps {
    currentQ: number;
    totalQ: number;
}

const ProgressBar = ({currentQ, totalQ}: ProgressProps) => {
    return (
            <ProgressBarStyled>{`Question ${currentQ + 1}/${totalQ}`}</ProgressBarStyled>
    );
};

export default ProgressBar;