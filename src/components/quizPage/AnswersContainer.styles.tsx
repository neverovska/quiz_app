import styled from "styled-components";

interface AnswersCountProp {
  count: number;
}

const AnswersGroup = styled.ul<AnswersCountProp>`
  display: grid;
  gap: 15px;
  grid-template-rows: ${({ count }) => `repeat(${count}, 1fr)`};
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  padding: 0;
`;

export { AnswersGroup };