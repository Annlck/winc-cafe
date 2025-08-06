import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";

export const App = () => {
  const greeting = "Welcome";

  return (
    <>
      <h1>{greeting}</h1>
      <DrinkButtons />
    </>
  );
};
