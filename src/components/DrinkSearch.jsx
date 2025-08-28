import { TextInput } from "./ui/TextInput";
import { useState } from "react";
import { DrinkList } from "./ui/DrinkItem";
import { availableDrinks } from "../utils/data";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState("test");

  return (
    <>
      <label for="text-input">Find your drink:</label>
      <TextInput />
      <DrinkList allDrinks={availableDrinks} />
      <p>{searchField}</p>
    </>
  );
};
