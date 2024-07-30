import styled, { css } from "styled-components";
import { BasicBlockStyles } from "../../general.styles";

const EndBlockTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const EndBlockInfo = styled.p`
  font-size: 16px;
`;

const EndBlocksContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  margin: 8vh 0;
`;

const EndBlockStyled = styled.div`
  ${BasicBlockStyles};
  height: 10vh;
  color: white;
  text-align: center;
`;

export { EndBlockInfo, EndBlockTitle, EndBlocksContainer, EndBlockStyled };
