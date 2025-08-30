import { Button } from "./Button";

export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <h2>{drink.name}</h2>
      <img src={drink.imgUrl} alt={drink.alt}></img>
      <p>Your {drink.name} will be ready in a few minutes.</p>
      <Button text={"Change selection"} clickFn={() => clickFn()} />
    </>
  );
};
