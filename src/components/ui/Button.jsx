import { Button as CButton } from "@chakra-ui/react";

export const Button = ({ text, clickFn }) => (
  <CButton colorScheme="teal" size="md" onClick={clickFn}>
    {text}
  </CButton>
);
