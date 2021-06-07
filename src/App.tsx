import * as React from "react";
import { ChakraProvider, Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/util/ColorModeSwitcher";
import theme from "./theme";
import { MapView } from "./components/MapView/MapView";
import { TopBar } from "./components/util/TopBar";
import { ConfigPanel } from "./components/ConfigPanel/ConfigPanel";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex minH="100vh" maxH="100vh">
        <MapView />
      </Flex>
      <Flex
        position="absolute"
        top={0}
        left={0}
        minH="100vh"
        maxH="100vh"
        minW="100vw"
        maxW="100vw"
        direction="column"
        textAlign="center"
        fontSize="xl"
        pointerEvents="none"
      >
        <TopBar />
        <ConfigPanel />
      </Flex>
    </ChakraProvider>
  );
};
