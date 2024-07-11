import React from 'react';
import {BlockWrapper, BlockTitle, NumberInput} from "./Block.styles";

const BlockWithInput = () => {
    return (
        <BlockWrapper>
            <BlockTitle>Number of questions</BlockTitle>
            <NumberInput placeholder="5-15"/>
        </BlockWrapper>
    );
};

export default BlockWithInput;