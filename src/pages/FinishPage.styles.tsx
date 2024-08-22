import styled, { css } from "styled-components";

const BasicPStyles = css`
  color: white;
  font-family: "Gill Sans MT";
  text-align: center;
`;

const Gratitude = styled.p`
  ${BasicPStyles};
  font-size: 26px;
  font-weight: bolder;
  margin: 10vh 0;
`;

const Result = styled.p`
  ${BasicPStyles};
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 2vh;
  background: linear-gradient(
    90deg,
    rgba(15, 66, 247, 1) 0%,
    rgba(172, 7, 230, 1) 100%
  );
`;

export { Result, Gratitude };