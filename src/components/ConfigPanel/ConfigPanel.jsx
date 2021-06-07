import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex } from "@chakra-ui/layout";

export const ConfigPanel = () => {
  const bgColor = useColorModeValue("gray.300", "gray.700")
  return (
    <Flex
      shadow="dark-lg"
      rounded="lg"
      flex={1}
      alignSelf="flex-end"
      w="30%"
      minW={200}
      m={4}
      overflow="hidden"
      bg={bgColor}
      pointerEvents="auto"
    ></Flex>
  );
};
