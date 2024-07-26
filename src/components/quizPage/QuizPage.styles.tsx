import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PageWrapper = styled.div`
  //width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainWrapper = styled.main`
  width: 50%;
`;

const Icon = styled(FontAwesomeIcon)`
  margin: 0 5px;
  color: white;
`;


export {MainWrapper, Icon, PageWrapper}