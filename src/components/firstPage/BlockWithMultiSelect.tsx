import React from 'react';
import Select from 'react-select';
import {BlockWrapper, BlockTitle} from "./Block.styles";

type Props = {
    title: string,
    options: Array<object>
}

const BlockWithMultiSelect = ({title, options}: Props) => {
    return (
        <BlockWrapper>
            <BlockTitle>{title}</BlockTitle>
            <Select
                defaultValue={options[0]}
                isMulti
                options={options}
                styles={{
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
                    multiValue: (provided) => ({
                        ...provided,
                        background: 'linear-gradient(90deg, rgba(59,49,242,1) 0%, rgba(116,28,236,1) 100%);', // Цвет фона для выбранных элементов
                    }),
                    multiValueLabel: (provided) => ({
                        ...provided,
                        color: 'white',
                    }),
                    multiValueRemove: (provided) => ({
                        ...provided,
                        color: 'white',
                        ':hover': {
                            backgroundColor: 'white',
                            color: 'red',
                        },
                    }),
                }}
            />
        </BlockWrapper>
    );
};

export default BlockWithMultiSelect;