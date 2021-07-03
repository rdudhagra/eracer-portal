import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Waypoint } from "../../models/Waypoint";
import { WaypointsList } from "./components/WaypointsList";

export const ConfigPanel = (props: {
  waypoints: Waypoint[];
  setWaypoints: Function;
}) => {
  const bgColor = useColorModeValue("gray.300", "gray.700");
  const cardColor = useColorModeValue("gray.400", "gray.600");
  const headerBrightness = useColorModeValue(".300", ".400");

  return (
    <Flex
      shadow="dark-lg"
      rounded="lg"
      flex={1}
      alignSelf="flex-end"
      w="30%"
      minW={300}
      maxW={450}
      m={4}
      overflow="hidden"
      bg={bgColor}
      pointerEvents="auto"
      flexDirection="column"
    >
      <Flex
        bg={cardColor}
        h={300}
        m={5}
        rounded="lg"
        flexDirection="column"
        overflow="hidden"
      >
        <Flex bg={`red${headerBrightness}`} w="100%" py={2} px={4}>
          <Heading fontSize="2xl">Waypoints</Heading>
        </Flex>
        <Box flex={1} style={{ overflow: "auto" }}>
          <WaypointsList
            waypoints={props.waypoints}
            setWaypoints={props.setWaypoints}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
