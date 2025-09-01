import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn }) => {
  return <Input onChange={changeFn} variant="flushed"></Input>;
};
