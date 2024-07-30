import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {BasicButtonStyles} from "../general.styles";

const Greetings = styled.p`
  color: white;
  font-size: 26px;
  font-family: "Gill Sans MT";
  font-weight: bold;
  text-align: start;
  margin: 5vh 0;
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

const ButtonStart = styled.button`
  ${BasicButtonStyles};
  background: linear-gradient(
    90deg,
    rgba(15, 66, 247, 1) 0%,
    rgba(172, 7, 230, 1) 100%
  );
`;

export {
  Greetings,
  BlocksContainer,
  Statistics,
  GreetingsContainer,
  IconStats,
  ButtonStart
};
