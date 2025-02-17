import React from "react";
import { Button } from "../UI/Button";
import styled from "styled-components";

export const MealForm = () => {
  return (
    <StyledForm>
      <StyledWrapper>
        <p>Amount</p>
        <StyledInput type="number" value={1} />
      </StyledWrapper>

      <Button children="+ ADD" />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bolder;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 50px;
  margin-left: 5px;
  border-radius: 5px;
`;
