import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <Flex
      onClick={() => clickFn(drink)}
      bgColor={"hsl(34, 64%, 98%)"}
      cursor={"pointer"}
      margin={"1rem"}
      borderRadius={"2rem"}
      padding={"0.5rem"}
      _hover={{ bgColor: "hsl(136, 26%, 92%)" }}
      alignItems="center"
      width={{ base: "100%", md: "300px" }}
    >
      <Image
        src={drink.imgUrl}
        alt={drink.alt}
        boxSize={{ base: "60px", md: "80px" }}
      />
      <Text paddingLeft={"2rem"} fontSize={{ base: "lg", md: "xl" }}>
        {drink.name}
      </Text>
    </Flex>
  );
};
