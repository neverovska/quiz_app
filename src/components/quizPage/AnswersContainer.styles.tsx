import styled from "styled-components";

interface AnswersCountProp {
    count: number
}

const AnswersGroup = styled.ul<AnswersCountProp>`
  display: grid;
  gap: 15px;
  grid-template-rows: ${({ count }) => (count >2 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)')};
  grid-template-columns: repeat(2, 1fr);
  margin: 0;
  padding: 0;
`;

export {AnswersGroup}