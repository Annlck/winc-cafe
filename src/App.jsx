import "./App.css";
import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const greeting = "Welcome";
  const [userDrink, setUserDrink] = useState();

  return (
    <div className="App">
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <Heading size="2xl" mb="2rem" color="blue.200">
            {greeting}
          </Heading>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};
