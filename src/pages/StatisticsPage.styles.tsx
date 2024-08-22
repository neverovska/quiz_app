import styled, { css } from "styled-components";
import { BasicBlockStyles } from "../general.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatsTextStyles = css`
  color: white;
  font-family: "Gill Sans MT";
`;

const ResultsText = styled.p`
  ${StatsTextStyles};
  font-size: 30px;
  font-weight: bold;
  margin: 5vh 0;
`;
const StatisticsWrapper = styled.div`
  ${BasicBlockStyles};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2vh 0;
  font-size: 20px;
`;

const RowWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
const AnsweredText = styled.p`
  ${StatsTextStyles};
  font-size: 24px;
  background: linear-gradient(
    90deg,
    rgba(15, 66, 247, 1) 0%,
    rgba(172, 7, 230, 1) 100%
  );

  span {
    font-weight: bold;
  }
`;

const StatisticsText = styled.p`
  ${StatsTextStyles};
  white-space: nowrap;

  span {
    font-weight: bold;
  }
`;

const IconCup = styled(FontAwesomeIcon)`
  height: 18px;
  width: 18px;
  margin-left: 5px;
`;

export {
  StatisticsWrapper,
  StatisticsText,
  ResultsText,
  AnsweredText,
  IconCup,
  RowWrapper,
};
