import { useColorModeValue } from "@chakra-ui/react";
import { FaMapMarker } from "react-icons/fa";
import { updateWaypoint, Waypoint } from "../../models/Waypoint";

export const WaypointMarker = (props: {
  waypoint: Waypoint;
  setWaypoints: Function;
  onMap: boolean;
  highlight: boolean;
}) => {
  const iconColor = useColorModeValue("black", "white");

  return (
    <FaMapMarker
      onMouseEnter={() => {
        if (props.onMap)
          props.setWaypoints((wps: Waypoint[]) =>
            updateWaypoint({ ...props.waypoint, active: true }, wps)
          );
      }}
      onMouseLeave={() => {
        if (props.onMap)
          props.setWaypoints((wps: Waypoint[]) =>
            updateWaypoint({ ...props.waypoint, active: false }, wps)
          );
      }}
      size={props.onMap ? 35 : 30}
      style={{
        translate: props.onMap ? "-50% -100%" : "",
        color: `var(--chakra-colors-${props.waypoint.active
            ? iconColor
            : (props.highlight ? "yellow-400" : "red-500")
          })`,
        zIndex: 1,
      }}
    />
  );
};
WaypointMarker.defaultProps = { onMap: false, active: false };
