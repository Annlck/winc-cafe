import { availableDrinks } from "../../utils/data";
import "DrinkItem.css";

export const DrinkItem = (drink) => {
  return (
    <div>
      <p>{drink.name}</p>
      <img src={drink.imgUrl} alt={drink.alt}></img>
    </div>
  );
};

// we want to display all beverages that are offered in the cafe.
// For each beverages we have an id, imgUrl and alts.

// const AllDrinks = () => {
//   const idkDrinks = availableDrinks.map((item) => <li>{item.name}</li>);

//   return <ul>{idkDrinks}</ul>;
// };

// const AllDrinksImages = () => {
//   const drinksList = availableDrinks.map((item) => (
//     <img width="100px" height="100px" src={item.imgUrl} alt={item.alt}></img>
//   ));

//   return <div>{drinksList}</div>;
// };

const AllDrinksWithImages = () => {
  return (
    <div>
      {availableDrinks.map((item) => (
        <p>{item.name}</p>
      ))}
      {availableDrinks.map((item) => (
        <img
          width="100px"
          height="100px"
          src={item.imgUrl}
          alt={item.alt}
        ></img>
      ))}
    </div>
  );
};

// end of exercise
