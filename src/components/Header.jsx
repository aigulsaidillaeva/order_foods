import styled from "styled-components";
import { COLORS } from "../styles/colors";
import { Basket } from "./Basket";

export const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <StyledLogo>ReactMeals</StyledLogo>
        <Basket />
      </Wrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: ${COLORS.primary};
  padding-top: 21px;
  padding-bottom: 21px;
`;
const StyledLogo = styled.div`
  color: rgb(255, 255, 255);
  font-size: 38px;
  font-weight: 600;
`;
const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
