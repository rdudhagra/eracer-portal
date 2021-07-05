import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGlobe } from "react-icons/fa";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { MapSatelliteSwitcher } from "./MapSatelliteSwitcher";

export const TopBar = (props: {
  satellite: boolean;
  setSatellite: Function;
}) => {
  const bgColor = useColorModeValue("gray.800", "white");
  const buttonColor = useColorModeValue("gray.700", "gray.100");
  const textColor = useColorModeValue("gray.100", "gray.800");
  const outlineColor = useColorModeValue("gray.400", "gray.800");
  const outlineColorHover = useColorModeValue("gray.500", "gray.600");

  return (
    <Flex
      w={"100%"}
      bg={bgColor}
      px={4}
      py={3}
      shadow="dark-lg"
      pointerEvents="auto"
    >
      <Heading fontSize="3xl" ps={2} color={textColor}>
        ERacer Portal
      </Heading>
      <Spacer />
      <InputGroup width={450} ms={4} borderColor={outlineColor}>
        <InputLeftAddon
          pointerEvents="none"
          fontSize="1em"
          color={textColor}
          bg={buttonColor}
          children={[
            <FaGlobe key="eracer-globeicon" />,
            <Text ms={3} key="earcer-wsheader">
              ws://
            </Text>,
          ]}
          borderColor={outlineColor}
        />
        <Input
          placeholder="Websocket Address"
          _placeholder={{ color: outlineColorHover }}
          color={textColor}
          borderColor={outlineColor}
          _hover={{ borderColor: outlineColorHover }}
        />
        <InputRightElement
          w="fit-content"
          borderColor={outlineColor}
          children={
            <Button size="xs" m={2} colorScheme="teal">
              Connect
            </Button>
          }
        />
      </InputGroup>
      <ColorModeSwitcher ms={4} />
      <MapSatelliteSwitcher
        ms={4}
        satellite={props.satellite}
        setSatellite={props.setSatellite}
      />
    </Flex>
  );
};
