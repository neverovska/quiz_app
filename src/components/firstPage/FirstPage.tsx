import React from 'react';
import BlockWithMultiSelect from "./BlockWithMultiSelect";
import BlockWithSelect from "./BlockWithSelect";
import BlockWithInput from "./BlockWithInput";
import ButtonStart from "./ButtonStart";
import {faChartSimple} from "@fortawesome/free-solid-svg-icons"
import {Greetings, MainWrapper, BlocksContainer, Statistics, GreetingsContainer, Icon} from "./FirstPage.styles";
import {TIMES, LEVELS, TYPES, CATEGORIES} from "../../consts";


const FirstPage = () => {
    return (
        <MainWrapper>
            <GreetingsContainer>
                <Greetings>Let's play!</Greetings>
                <Statistics>My stats
                    <Icon icon={faChartSimple}/>
                </Statistics>
            </GreetingsContainer>

            <BlockWithMultiSelect title="Category"
                                  options={CATEGORIES.map((cat) => ({value: cat, label: cat}))}/>
            <BlocksContainer>
                <BlockWithSelect
                    title="Time"
                    options={TIMES.map((time) => ({value: time, label: `${time} min`}))}
                />
                <BlockWithSelect title="Difficulty" options={LEVELS.map((level) => ({value: level, label: level}))}/>
                <BlockWithSelect title="Type"
                                 options={TYPES.map((type) => ({value: type, label: type}))}/>
                <BlockWithInput title="Number of questions" minQuestions={5} maxQuestions={15}/>
            </BlocksContainer>
            <ButtonStart/>
        </MainWrapper>

    );
};

export default FirstPage;