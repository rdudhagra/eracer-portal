import { Box, Text, useColorModeValue, Flex } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import {
  moveWaypoint,
  removeWaypoint,
  updateWaypoint,
  Waypoint,
} from "../../../models/Waypoint";
import { WaypointMarker } from "../../util/WaypointMarker";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
} from "react-beautiful-dnd";
import { useCallback } from "react";
import { CurveInterpolator } from "curve-interpolator";
import {
  makeDrivePathLayer,
  POLYLINE_NUM_SEGMENTS,
  POLYLINE_SMOOTHING_FACTOR,
} from "../../MapView/MapView";

export const WaypointsList = (props: {
  waypoints: Waypoint[];
  setWaypoints: Function;
  polyline: { points: any[]; path: any };
  setPolyline: Function;
}) => {
  const textBrightness = useColorModeValue(".700", ".400");

  const setWaypoints = props.setWaypoints;
  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (result.destination?.index !== undefined)
        setWaypoints((wps: Waypoint[]) => {
          let newWps = moveWaypoint(
            result.source.index,
            result.destination?.index!,
            wps
          );
          let pl = new CurveInterpolator(
            newWps.map((wp) => [wp.lon, wp.lat]),
            {
              tension: POLYLINE_SMOOTHING_FACTOR,
            }
          ).getPoints(POLYLINE_NUM_SEGMENTS);
          props.setPolyline({
            points: pl,
            path: makeDrivePathLayer(pl),
          });
          return newWps;
        });
    },
    // eslint-disable-next-line
    [setWaypoints]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box h="100%" style={{ overflow: "auto" }}>
        <Droppable droppableId="eracer-waypoints">
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <Box ref={provided.innerRef} {...provided.droppableProps}>
              {props.waypoints.map((waypoint, ind) => (
                <Draggable
                  key={waypoint.key}
                  draggableId={waypoint.key}
                  index={ind}
                >
                  {(provided, snapshot) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Flex
                        py={3}
                        borderY="0.5px solid gray"
                        style={{ borderCollapse: "collapse" }}
                        alignItems="center"
                        flexDirection="row"
                        key={waypoint.key}
                        onMouseEnter={() => {
                          props.setWaypoints((wps: Waypoint[]) =>
                            updateWaypoint({ ...waypoint, active: true }, wps)
                          );
                        }}
                        onMouseLeave={() => {
                          props.setWaypoints((wps: Waypoint[]) =>
                            updateWaypoint({ ...waypoint, active: false }, wps)
                          );
                        }}
                        pointerEvents="fill"
                      >
                        <Box px={3}>
                          <MdClose
                            size={20}
                            cursor="pointer"
                            onClick={() =>
                              props.setWaypoints((wps: Waypoint[]) => {
                                let newWps = removeWaypoint(waypoint, wps);
                                let pl = newWps.length
                                  ? new CurveInterpolator(
                                      newWps.map((wp) => [wp.lon, wp.lat]),
                                      {
                                        tension: POLYLINE_SMOOTHING_FACTOR,
                                      }
                                    ).getPoints(POLYLINE_NUM_SEGMENTS)
                                  : [];
                                props.setPolyline({
                                  points: pl,
                                  path: makeDrivePathLayer(pl),
                                });
                                return newWps;
                              })
                            }
                          />
                        </Box>
                        <Box px={2} pl={4}>
                          <WaypointMarker
                            waypoint={waypoint}
                            setWaypoints={props.setWaypoints}
                          />
                        </Box>
                        <Box px={2} fontSize="xs" w="100%">
                          Lat: {waypoint.lat.toFixed(6)}
                          <br />
                          Lon: {waypoint.lon.toFixed(6)}
                        </Box>
                        <Box
                          px={4}
                          textAlign="right"
                          fontSize="md"
                          onClick={() => {
                            props.setWaypoints((wps: Waypoint[]) =>
                              updateWaypoint(
                                { ...waypoint, fullStop: !waypoint.fullStop },
                                wps
                              )
                            );
                          }}
                        >
                          <Text
                            whiteSpace="nowrap"
                            textColor={`${
                              waypoint.fullStop ? "red" : "teal"
                            }${textBrightness}`}
                            cursor="pointer"
                          >
                            {waypoint.fullStop ? "Full Stop" : "Coast"}
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Box>
    </DragDropContext>
  );
};
