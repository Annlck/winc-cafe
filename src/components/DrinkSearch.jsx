import { useState } from "react";
import { availableDrinks } from "../utils/data";
import { DrinkList } from "./ui/DrinkList";
import { TextInput } from "./ui/TextInput";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("test");

  return (
    <>
      <label for="text-input">Find your drink:</label>
      <TextInput />
      <DrinkList clickFn={clickFn} allDrinks={availableDrinks} />
      <p>{searchField}</p>
    </>
  );
};
