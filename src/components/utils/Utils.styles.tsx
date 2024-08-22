import styled from "styled-components";
import { BasicButtonStyles } from "../../general.styles";
import { motion } from "framer-motion";

const UtilsWrapper = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
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

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Spinner = styled(motion.div)`
  border: 8px solid #404040;
  border-top: 8px solid rgba(15, 66, 247, 1);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export {
  UtilsWrapper,
  ErrorText,
  GoBackButtonStyled,
  Spinner,
  LoadingContainer,
};
