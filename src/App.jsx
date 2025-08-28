import "./App.css";
import { useState } from "react";
import { DrinkChoice } from "./components/ui/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { DrinkItem } from "./components/ui/DrinkItem";
import { DrinkList } from "./components/ui/DrinkItem";

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
          <DrinkItem />
          <DrinkList />
        </div>
      )}
    </>
  );
};
