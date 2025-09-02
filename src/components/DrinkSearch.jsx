import { useState } from "react";

import { availableDrinks } from "../utils/data";
import { DrinkList } from "./DrinkList";
import { TextInput } from "./ui/TextInput";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => setSearchField(event.target.value);

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLocaleLowerCase());
  });

  return (
    <>
      <label for="text-input">Find your drink:</label>
      <TextInput changeFn={handleChange} w={200} mb={8} />
      <DrinkList clickFn={clickFn} allDrinks={matchedDrinks} />
    </>
  );
};
