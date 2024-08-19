import styled from "styled-components";
import { BasicButtonStyles } from "../../general.styles";

const UtilsWrapper = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  //align-items: center;
  flex-direction: column;
  //gap: 50px;
  margin: 0 auto;
`;

const ErrorText = styled.p`
  color: white;
  font-size: 30px;
  font-family: "Gill Sans MT";
  font-weight: bold;
`;

const GoBackButtonStyled = styled.button`
  ${BasicButtonStyles};
  margin-top: 5vh;
  background: linear-gradient(
    90deg,
    rgba(15, 66, 247, 1) 0%,
    rgba(172, 7, 230, 1) 100%
  );
`;

export { UtilsWrapper, ErrorText, GoBackButtonStyled };
