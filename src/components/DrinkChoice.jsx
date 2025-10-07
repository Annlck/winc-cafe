import { Button } from "./ui/Button";

import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

export const DrinkChoice = ({ drink, clickFn }) => {
  return (
    <>
      <Heading size="xl" mb="2rem" color="blue.200">
        {drink.name}
      </Heading>
      <Center>
        <Image src={drink.imgUrl} alt={drink.alt} boxSize="300px" />
      </Center>
      <Text>
        Your {drink.name.toLowerCase()} will be ready in a few minutes.
      </Text>
      <Button onClick={() => clickFn()} variant="ghost">
        Change selection
      </Button>
    </>
  );
};
