import { Button } from "./ui/Button";

import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export const DrinkChoice = ({ drink, clickFn }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center flexDir={"column"} gap={4}>
      <Heading size="xl" mb="2rem" color="blue.200">
        {drink.name}
      </Heading>

      <Image src={drink.imgUrl} alt={drink.alt} boxSize="300px" />
      <Text>
        Your {drink.name.toLowerCase()} will be ready in a few minutes.
      </Text>

      <Flex mt={4}>
        <Button onClick={onOpen} mr={4}>
          Confirm order
        </Button>
        <Button onClick={() => clickFn()} variant="ghost">
          Change selection
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm your order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>1x {drink.name}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={4}>
              Confirm
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};
