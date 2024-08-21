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
import { resetScore } from "../../redux/slices/scoreSlice";
import { motion } from "framer-motion"

const AnimatedModalWindowContainer = motion(ModalWindowContainer);
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
    <ModalWindowStyled >
      <AnimatedModalWindowContainer initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.8,
                              delay: 0.1,
                              ease: [0, 0.71, 0.2, 1.01]
                            }}>
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
      </AnimatedModalWindowContainer>
    </ModalWindowStyled>
  );
};

export default ModalWindow;
