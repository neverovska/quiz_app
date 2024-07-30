import styled from "styled-components";
import { BasicBlockStyles, BasicButtonStyles } from "../../general.styles";

const ModalWindowStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(40, 40, 40, 0.75);
  z-index: 10000;
  justify-content: center;
  display: flex;
  align-items: center;
`;
const ModalWindowContainer = styled.div`
  ${BasicBlockStyles};
  width: 40%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ModalWindowButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const ModalWindowCancelButton = styled.button`
  ${BasicButtonStyles};
  font-size: 22px;
  background: linear-gradient(
    90deg,
    rgba(59, 49, 242, 1) 0%,
    rgba(116, 28, 236, 1) 100%
  );
`;

const ModalWindowConfirmButton = styled.button`
  ${BasicButtonStyles};
  font-size: 22px;
  background: linear-gradient(
    90deg,
    rgba(119, 27, 236, 1) 0%,
    rgba(172, 7, 230, 1) 100%
  );
`;
const ModalWindowTitle = styled.p`
  color: white;
  font-size: 26px;
  margin: auto 0;
  font-family: "Gill Sans MT";
`;

export {
  ModalWindowCancelButton,
  ModalWindowConfirmButton,
  ModalWindowStyled,
  ModalWindowTitle,
  ModalWindowContainer,
  ModalWindowButtonContainer,
};
