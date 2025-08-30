import { TextInput } from "./ui/TextInput";
import { useState } from "react";
import { DrinkList } from "./ui/DrinkList";
import { availableDrinks } from "../utils/data";

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
