import "./DrinkButtons.css";
import { Button } from "./ui/Button";

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  const question = "Would you like some tea or coffee?";

  return (
    <>
      <h2>{question}</h2>

      <div className="button-group">
        <Button text={drinkOne} />
        <Button text={drinkTwo} />
      </div>
    </>
  );
};
