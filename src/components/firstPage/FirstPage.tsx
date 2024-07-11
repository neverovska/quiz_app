import React from 'react';
import BlockWithMultiSelect from "./BlockWithMultiSelect";
import BlockWithSelect from "./BlockWithSelect";
import BlockWithInput from "./BlockWithInput";
import ButtonStart from "./ButtonStart";
import {faChartSimple} from "@fortawesome/free-solid-svg-icons"
import {Greetings, MainWrapper, BlocksContainer, Statistics, GreetingsContainer, Icon} from "./FirstPage.styles";


const FirstPage = () => {
    return (
        <MainWrapper>
            <GreetingsContainer>
                <Greetings>Let's play!</Greetings>
                <Statistics>My stats
                    <Icon icon={faChartSimple}/>
                </Statistics>
            </GreetingsContainer>

            <BlockWithMultiSelect title="Category" options={[
                {value: 'all', label: 'All'},
                {value: '1cat', label: '1cat'},
                {value: '2cat', label: '2cat'},
                {value: '3cat', label: '3cat'},]}/>
            <BlocksContainer>
                <BlockWithSelect title="Time" options={[
                    {value: '1', label: '1 min'},
                    {value: '2', label: '2 min'},
                    {value: '5', label: '5 min'},
                ]}/>
                <BlockWithSelect title="Type" options={[
                    {value: 'easy', label: 'Easy'},
                    {value: 'medium', label: 'Medium'},
                    {value: 'hard', label: 'Hard'},]}/>
                <BlockWithSelect title="Category" options={[{
                    value: 'chocolate', label: 'Chocolate'
                }]}/>
                <BlockWithInput/>
            </BlocksContainer>
            <ButtonStart/>
        </MainWrapper>

    );
};

export default FirstPage;