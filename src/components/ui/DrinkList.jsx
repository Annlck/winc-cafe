import { DrinkItem } from "./DrinkItem";

export const DrinkList = ({ allDrinks }) => {
  return (
    <>
      {allDrinks.map((item) => (
        <DrinkItem drink={item} key={drink.id} />
      ))}
    </>
  );
};
