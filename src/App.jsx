import "./App.css";
import { useState } from "react";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/ui/DrinkChoice";
import { coffee, tea } from "./utils/data";

const UserChoice = (drink) => {
  if (drink) {
    return null;
  }
  return WelcomeMessage;
};

export const App = () => {
  const greeting = "Welcome";
  const [userDrink, setUserDrink] = useState(coffee);

  return (
    <>
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
        <div className="WelcomeMessage">
          <h1>{greeting}</h1>
          <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
        </div>
      )}
    </>
  );
};
