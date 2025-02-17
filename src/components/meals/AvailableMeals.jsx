import React from "react";
import { DUMMY_MEALS } from "../../styles/availableMeal";
import { MealItem } from "./MealItem";
import styled from "styled-components";
export const AvailableMeals = () => {
  console.log(DUMMY_MEALS);
  return (
    <StyledAvailabelMeals>
      {DUMMY_MEALS.map((food) => {
        return (
          <MealItem
            title={food.title}
            description={food.description}
            price={food.price}
          />
        );
      })}
    </StyledAvailabelMeals>
  );
};

const StyledAvailabelMeals = styled.div`
  padding: 10px;
`;
