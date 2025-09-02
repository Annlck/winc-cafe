import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <Flex
      onClick={() => clickFn(drink)}
      bgColor={"hsl(34, 64%, 98%)"}
      width={"100%"}
      cursor={"pointer"}
      margin={"1rem"}
      flexWrap={"wrap"}
      flexDirection={"horizontal"}
      borderRadius={"2rem"}
      padding={"0.5rem"}
      alignItems={"center"}
      _hover={{ bgColor: "hsl(136, 26%, 92%)" }}
    >
      <Image src={drink.imgUrl} alt={drink.alt} boxSize="80px" />
      <Text paddingLeft={"2rem"} fontSize={"xl"}>
        {drink.name}
      </Text>
    </Flex>
  );
};
