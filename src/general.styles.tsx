import styled, { css } from "styled-components";

const MainWrapper = styled.main`
  width: 50%;
  margin: 0 auto;
`;

const BasicButtonStyles = css`
  width: 100%;
  height: 10vh;
  border-radius: 10px;
  color: white;
  font-size: 26px;
  font-family: "Gill Sans MT";
  font-weight: bold;
  border: none;
  padding: 0;

  &:hover {
    transition: transform 0.5s;
    transform: scale(1.01);
  }
`;

const BasicBlockStyles = css`
  border-radius: 10px;
  background: #404040;
  padding: 3vh 2vh;
`;

export { MainWrapper, BasicButtonStyles, BasicBlockStyles };
