import { DrinkItem } from "./DrinkItem";
import { Container } from "@chakra-ui/react";

export const DrinkList = ({ allDrinks, clickFn }) => {
  return (
    <Container centerContent>
      {allDrinks.map((item) => (
        <DrinkItem key={item.id} drink={item} clickFn={clickFn} />
      ))}
    </Container>
  );
};
