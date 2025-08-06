import "./DrinkButtons.css";

export const DrinkButtons = () => {
  const question = "Would you like some tea or coffee?";

  return (
    <>
      <h2>{question}</h2>

      <div className="button-group">
        <div className="button">Tea</div>
        <div className="button">Coffee</div>
      </div>
    </>
  );
};
