import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { MapView } from "./components/MapView/MapView";
import { TopBar } from "./components/util/TopBar";
import { ConfigPanel } from "./components/ConfigPanel/ConfigPanel";

import { Waypoint } from "./models/Waypoint";

export const App = () => {
  const [waypoints, setWaypoints] = useState<Waypoint[]>([]);
  const [polyline, setPolyline] = useState({} as { points: any[]; path: any });

  return (
    <>
      <Flex minH="100vh" maxH="100vh">
        <MapView waypoints={waypoints} setWaypoints={setWaypoints} polyline={polyline} setPolyline={setPolyline} />
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
        <ConfigPanel waypoints={waypoints} setWaypoints={setWaypoints} polyline={polyline} setPolyline={setPolyline} />
      </Flex>
    </>
  );
};
