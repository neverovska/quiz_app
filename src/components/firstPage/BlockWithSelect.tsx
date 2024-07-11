import React from 'react';
import Select from 'react-select';
import {BlockWrapper, BlockTitle} from "./Block.styles";

type Props = {
    title: string,
    options: Array<object>
}


const BlockWithSelect = ({title, options} : Props) => {
    return (
        <BlockWrapper>
            <BlockTitle>{title}</BlockTitle>
            <Select options={options} styles={{
                control: (provided) => ({
                    ...provided,
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                        border: 'none',
                    },

                }),
                indicatorSeparator: () => ({
                    display: 'none',
                }),
                singleValue: (provided) => ({
                    ...provided,
                    color: 'white',
                }),
            }} />
        </BlockWrapper>);
};

export default BlockWithSelect;