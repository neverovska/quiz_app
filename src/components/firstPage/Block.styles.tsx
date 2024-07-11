import styled from "styled-components";


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

  
`
const BlockTitle = styled.p`
  font-size: 20px;
  font-family: "Gill Sans MT";
  font-weight: bold;
  color: white;
 
`

const NumberInput = styled.input`
  all: unset;
  caret-color: white;
  border-bottom: 1px solid #ccc;
`

export  {BlockTitle, BlockWrapper, NumberInput};