import styled, { css } from "styled-components";
import { BasicButtonStyles } from "../../general.styles";

const RestartButton = styled.button`
  ${BasicButtonStyles};
  background: linear-gradient(
    90deg,
    rgba(15, 66, 247, 1) 0%,
    rgba(59, 49, 242, 1) 23% 100%
  );
`;

const ChooseButton = styled.button`
  ${BasicButtonStyles};
  background: linear-gradient(
    90deg,
    rgba(116, 28, 236, 1) 0%,
    rgba(172, 7, 230, 1) 100%
  );
`;

const EndButtonsContainerStyled = styled.div`
  display: grid;
  gap: 3%;
  grid-template-columns: 15% 82%;
  margin: 0;
  padding: 0;
`;

export { RestartButton, ChooseButton, EndButtonsContainerStyled };
