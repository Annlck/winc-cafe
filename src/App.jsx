import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/ui/DrinkChoice";
import { coffee, tea } from "./utils/data";

export const App = () => {
  const greeting = "Welcome";
  const userDrink = tea;

  return (
    <>
      <h1>{greeting}</h1>
      <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
      <DrinkChoice drink={userDrink} />
    </>
  );
};
