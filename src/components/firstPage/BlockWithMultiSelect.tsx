import React from 'react';
import {BlockWrapper, BlockTitle, StylizedMultiSelect} from "./Block.styles";

type Props = {
    title: string,
    options: Array<object>
}


const BlockWithMultiSelect = ({title, options}: Props) => {
    return (
        <BlockWrapper>
            <BlockTitle>{title}</BlockTitle>
            <StylizedMultiSelect classNamePrefix="Select" isMulti defaultValue={options[0]} options={options}/>
        </BlockWrapper>
    );
};

export default BlockWithMultiSelect;