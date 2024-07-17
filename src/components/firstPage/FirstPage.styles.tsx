import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Greetings = styled.p`
  color: white;
  font-size: 26px;
  font-family: "Gill Sans MT";
  font-weight: bold;
  text-align: start;
  margin: 5vh 0;
`;

const MainWrapper = styled.main`
  width: 50%;
  margin: 0 auto;
`;

const BlocksContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin: 20px 0;
`;

const GreetingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Statistics = styled.button`
  all: unset;
  color: #ccc;
  &:hover {
    color: white;
  }
`;

const IconStats = styled(FontAwesomeIcon)`
  margin: 0 5px;
  color: white;
`;


export  {Greetings, MainWrapper, BlocksContainer, Statistics, GreetingsContainer, IconStats};