import React from 'react';
import {AnswersGroup} from "./AnswersContainer.styles";
import AnswerButton from "./AnswerButton";
import {generate} from 'shortid';


interface AnswersProps {
    answers: Object,
    count: number
}

const AnswersContainer = ({answers, count}: AnswersProps) => {
    return (
        <AnswersGroup count={count}>
            {Object.keys(answers).map((answer) =>
                <AnswerButton key={generate()} answer={answer}/>)}
        </AnswersGroup>
    );
};


export default AnswersContainer;