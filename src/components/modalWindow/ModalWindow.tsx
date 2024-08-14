import React from "react";
import {
  ModalWindowConfirmButton,
  ModalWindowCancelButton,
  ModalWindowButtonContainer,
  ModalWindowContainer,
  ModalWindowStyled,
  ModalWindowTitle,
} from "./ModalWindow.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetScore } from "../../slices/scoreSlice";

interface ModalWindowProps {
  onClose: () => void;
}

const ModalWindow = ({ onClose }: ModalWindowProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToStart = () => {
    dispatch(resetScore());
    navigate("/");
  };
  return (
    <ModalWindowStyled>
      <ModalWindowContainer>
        <ModalWindowTitle>
          Are you sure you want to quit the quiz?
        </ModalWindowTitle>
        <ModalWindowButtonContainer>
          <ModalWindowCancelButton onClick={onClose}>
            Cancel
          </ModalWindowCancelButton>
          <ModalWindowConfirmButton onClick={goToStart}>
            Confirm
          </ModalWindowConfirmButton>
        </ModalWindowButtonContainer>
      </ModalWindowContainer>
    </ModalWindowStyled>
  );
};

export default ModalWindow;
