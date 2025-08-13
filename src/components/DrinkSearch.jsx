import { TextInput } from "./ui/TextInput";
import { useState } from "react";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState("test");

  return (
    <>
      <label for="text-input">Find your drink:</label>
      <TextInput />
      <p>{searchField}</p>
    </>
  );
};
