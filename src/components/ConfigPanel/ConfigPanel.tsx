import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { ButtonGroup, Button } from "@chakra-ui/react";
import { useRef } from "react";
import { useCallback } from "react";
import { Waypoint } from "../../models/Waypoint";
import { WaypointsList } from "./components/WaypointsList";
import { CurveInterpolator } from "curve-interpolator";
import {
  makeDrivePathLayer,
  POLYLINE_NUM_SEGMENTS,
  POLYLINE_SMOOTHING_FACTOR,
} from "../MapView/MapView";
var fileDownload = require("js-file-download");

export const ConfigPanel = (props: {
  waypoints: Waypoint[];
  setWaypoints: Function;
  polyline: { points: any[]; path: any };
  setPolyline: Function;
  insertIndex: number;
  setInsertIndex: Function;
}) => {
  const bgColor = useColorModeValue("gray.300", "gray.700");
  const cardColor = useColorModeValue("gray.400", "gray.600");
  const headerBrightness = useColorModeValue(".300", ".400");

  const setWaypoints = props.setWaypoints;
  const setPolyline = props.setPolyline;

  const clearWaypoints = useCallback(() => {
    setWaypoints(() => {
      setPolyline({
        points: [],
        path: makeDrivePathLayer([]),
      });
      return [];
    });
  }, [setWaypoints, setPolyline]);

  const saveWaypoints = useCallback(() => {
    fileDownload(JSON.stringify(props.waypoints, null, 2), "waypoints.json");
  }, [props.waypoints]);

  const loadJsonInput = useRef(null);
  const loadWaypoints = useCallback(
    (event) => {
      let file = event.target.files[0];
      if (file) {
        let reader = new FileReader();
        reader.onload = function (event) {
          setWaypoints(() => {
            // @ts-ignore TS2531
            let newWps = JSON.parse(event.target.result);
            if (newWps.length) {
              let pl = new CurveInterpolator(
                newWps.map((wp: { lon: any; lat: any }) => [wp.lon, wp.lat]),
                {
                  tension: POLYLINE_SMOOTHING_FACTOR,
                }
              ).getPoints(POLYLINE_NUM_SEGMENTS);
              setPolyline({
                points: pl,
                path: makeDrivePathLayer(pl),
              });
              props.setInsertIndex(newWps.length);
            }
            return newWps;
          });
        };
        reader.readAsText(file);
      }
    },
    [setWaypoints, setPolyline, props]
  );

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
          <Heading fontSize="2xl" me="auto">
            Waypoints
          </Heading>
          <ButtonGroup
            size="sm"
            isAttached
            variant="solid"
            colorScheme="blackAlpha"
          >
            <Button onClick={clearWaypoints}>Clear</Button>
            <input
              ref={loadJsonInput}
              type="file"
              onChange={loadWaypoints}
              style={{ display: "none" }}
            />
            <Button
              onClick={() =>
                // @ts-ignore: Object is possibly 'null'.
                loadJsonInput.current.click()
              }
            >
              Load
            </Button>
            <Button onClick={saveWaypoints}>Save</Button>
          </ButtonGroup>
        </Flex>
        <Box flex={1} style={{ overflow: "auto" }}>
          <WaypointsList
            waypoints={props.waypoints}
            setWaypoints={props.setWaypoints}
            polyline={props.polyline}
            setPolyline={props.setPolyline}
            insertIndex={props.insertIndex}
            setInsertIndex={props.setInsertIndex}
          />
        </Box>
      </Flex>
    </Flex>
  );
};
