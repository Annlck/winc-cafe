import "./DrinkButtons.css";

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
  const question = "Would you like some tea or coffee?";

  return (
    <>
      <h2>{question}</h2>

      <div className="button-group">
        <div className="button">{drinkOne}</div>
        <div className="button">{drinkTwo}</div>
      </div>
    </>
  );
};
