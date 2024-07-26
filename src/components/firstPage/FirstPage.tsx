import React from 'react';
import BlockWithMultiSelect from "./BlockWithMultiSelect";
import BlockWithSelect from "./BlockWithSelect";
import BlockWithInput from "./BlockWithInput";
import ButtonStart from "./ButtonStart";
import {faChartSimple} from "@fortawesome/free-solid-svg-icons"
import {Greetings, MainWrapper, BlocksContainer, Statistics, GreetingsContainer, IconStats} from "./FirstPage.styles";
import {TIMES, LEVELS, TYPES, CATEGORIES} from "../../consts";

const selectFilling = (item: string) => ({value: item, label: item});


const FirstPage = () => {
    return (
        <MainWrapper>
            <GreetingsContainer>
                <Greetings>Let's play!</Greetings>
                <Statistics>My stats
                    <IconStats icon={faChartSimple}/>
                </Statistics>
            </GreetingsContainer>

            <BlockWithMultiSelect title="Category"
                                  options={CATEGORIES.map(selectFilling)}/>
            <BlocksContainer>
                <BlockWithSelect
                    title="Time"
                    options={TIMES.map(selectFilling)}
                />
                <BlockWithSelect title="Difficulty" options={LEVELS.map(selectFilling)}/>
                <BlockWithSelect title="Type"
                                 options={TYPES.map(selectFilling)}/>
                <BlockWithInput title="Number of questions" minQuestions={5} maxQuestions={15}/>
            </BlocksContainer>
            <ButtonStart/>
        </MainWrapper>

    );
};

export default FirstPage;