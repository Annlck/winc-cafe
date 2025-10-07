import { DrinkItem } from "./DrinkItem";
import { Flex } from "@chakra-ui/react";

export const DrinkList = ({ allDrinks, clickFn }) => {
  return (
    <Flex
      flexDirection={{ base: "vertical", md: "horizontal" }}
      flexWrap="wrap"
      alignItems="center"
      justifyContent={{ base: "flex-start", md: "center" }}
    >
      {allDrinks.map((item) => (
        <DrinkItem key={item.id} drink={item} clickFn={clickFn} />
      ))}
    </Flex>
  );
};
