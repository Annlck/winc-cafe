import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { coffee, tea } from "./utils/data";

export const App = () => {
  const greeting = "Welcome";

  return (
    <>
      <h1>{greeting}</h1>
      <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
    </>
  );
};
