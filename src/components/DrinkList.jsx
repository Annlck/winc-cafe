import { DrinkItem } from "./DrinkItem";

export const DrinkList = ({ allDrinks, clickFn }) => {
  return (
    <>
      {allDrinks.map((item) => (
        <DrinkItem key={item.id} drink={item} clickFn={clickFn} />
      ))}
    </>
  );
};
