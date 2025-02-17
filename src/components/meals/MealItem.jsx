import React from "react";
import { MealForm } from "./MealForm";
import styled from "styled-components";

export const MealItem = (props) => {
  const { title, description, price } = props;
  return (
    <StyledItem>
      <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <MealForm />
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
`;
