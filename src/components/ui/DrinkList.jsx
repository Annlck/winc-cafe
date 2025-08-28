import { DrinkItem } from "./DrinkItem";

export const DrinkList = ({ allDrinks }) => {
  return (
    <>
      {allDrinks.map((item) => (
        <DrinkItem key={item.id} drink={item} />
      ))}
    </>
  );
};
