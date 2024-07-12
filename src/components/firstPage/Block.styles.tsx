import styled from "styled-components";
import Select from "react-select";

const BlockWrapper = styled.div`
  border-radius: 10px;
  background: #404040;
  text-align: start;
  padding: 3vh 2vh;
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
  .Select__control {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  .Select__control:hover {
    border: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__multi-value {
    background: linear-gradient(90deg, rgba(59, 49, 242, 1) 0%, rgba(116, 28, 236, 1) 100%);
  }

  .Select__multi-value__label {
    color: white;
  }

  .Select__multi-value__remove {
    color: white;
  }

  .Select__multi-value__remove:hover {
    background-color: white;
    color: red;
  }

  .Select__input {
    caret-color: transparent;
  }
`;

const StylizedSingleSelect = styled(Select)`
  .Select__control {
    background-color: transparent;
    border: none;
    box-shadow: none;
  }

  .Select__control:hover {
    border: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__single-value {

    color: white;
  }

  .Select__input {
    caret-color: transparent;
  }
`;

export {BlockTitle, BlockWrapper, NumberInput, StylizedMultiSelect, StylizedSingleSelect};