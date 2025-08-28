import "./App.css";
import { useState } from "react";
import { DrinkChoice } from "./components/ui/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";

const UserChoice = (drink) => {
  if (drink) {
    return null;
  }
  return WelcomeMessage;
};

export const App = () => {
  const greeting = "Welcome";
  const [userDrink, setUserDrink] = useState();

  return (
    <>
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
        <div className="WelcomeMessage">
          <h1>{greeting}</h1>
          <DrinkSearch />
        </div>
      )}
    </>
  );
};
