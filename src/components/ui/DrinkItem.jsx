import "./DrinkItem.css";

export const DrinkItem = ({ drink }) => {
  return (
    <div>
      <p>{drink.name}</p>
      <img src={drink.imgUrl} alt={drink.alt} />
    </div>
  );
};
