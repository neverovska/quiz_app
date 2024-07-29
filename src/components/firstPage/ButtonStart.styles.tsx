import styled from "styled-components";
import { BasicButtonStyles } from "../../general.styles";

const Button = styled.button`
  ${BasicButtonStyles};
  background: linear-gradient(
    90deg,
    rgba(15, 66, 247, 1) 0%,
    rgba(172, 7, 230, 1) 100%
  );
`;
export { Button };
