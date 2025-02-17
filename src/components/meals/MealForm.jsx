import React from "react";
import { Button } from "../UI/Button";

export const MealForm = () => {
  return (
    <form>
      <p>Amount</p>
      <input type="number" />
      <Button children="+ ADD" />
    </form>
  );
};
