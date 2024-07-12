import React from 'react';
import {BlockWrapper, BlockTitle, NumberInput} from "./Block.styles";

type Props = {
    title: string,
    minQuestions: number,
    maxQuestions: number
}

const BlockWithInput = ({title, minQuestions, maxQuestions}: Props) => {
    return (
        <BlockWrapper>
            <BlockTitle>{title}</BlockTitle>
            <NumberInput type="number" placeholder={`${minQuestions}-${maxQuestions}`}/>
        </BlockWrapper>
    );
};

export default BlockWithInput;