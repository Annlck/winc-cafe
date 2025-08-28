import { availableDrinks } from "../../utils/data";
import "./DrinkItem.css";

export const DrinkItem = ({ drink }) => {
  return (
    <div>
      <p>{drink.name}</p>
      <img src={drink.imgUrl} alt={drink.alt} />
    </div>
  );
};

export const DrinkList = ({ allDrinks }) => {
  return (
    <>
      {allDrinks.map((item) => (
        <DrinkItem drink={item} key={drink.id} />
      ))}
    </>
  );
};
