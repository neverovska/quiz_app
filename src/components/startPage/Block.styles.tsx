import styled, { css } from "styled-components";
import Select from "react-select";
import {BasicBlockStyles} from "../../general.styles";

const BasicSelectStyles = css`
  &__control {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  &__control:hover {
    border: none;
  }

  &__indicator-separator {
    display: none;
  }

  &__input {
    caret-color: transparent;
  }
`;

const BlockWrapper = styled.div`
  ${BasicBlockStyles};
  text-align: start;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
`;

const BlockTitle = styled.p`
  font-size: 20px;
  font-family: "Gill Sans MT";
  font-weight: bold;
  color: white;
`;

const NumberInput = styled.input`
  all: unset;
  caret-color: white;
  border-bottom: 1px solid #ccc;
  color: white;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StylizedMultiSelect = styled(Select)`
  .Select {
    ${BasicSelectStyles}
    &__multi-value {
      background: linear-gradient(
        90deg,
        rgba(59, 49, 242, 1) 0%,
        rgba(116, 28, 236, 1) 100%
      );
    }

    &__multi-value__label {
      color: white;
    }

    &__multi-value__remove {
      color: white;
    }

    &__multi-value__remove:hover {
      background-color: white;
      color: red;
    }
  }
`;

const StylizedSingleSelect = styled(Select)`
  .Select {
    ${BasicSelectStyles}
    &__single-value {
      color: white;
    }
  }
`;

export {
  BlockTitle,
  BlockWrapper,
  NumberInput,
  StylizedMultiSelect,
  StylizedSingleSelect,
};