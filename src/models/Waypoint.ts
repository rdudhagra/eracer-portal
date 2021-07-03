import arrayMove from "array-move";
import { v4 as uuid } from "uuid";

export type Waypoint = {
  key: string;
  lat: number;
  lon: number;
  fullStop: boolean;
  active: boolean;
};

// All of these functions return a modified copy of the waypoints array without
// modifying the original. This is important so that React can properly manage
// state and detect changes in the waypoints array, rerendering only what's needed.
export function updateWaypoint(newWaypoint: Waypoint, waypoints: Waypoint[]) {
  let newWaypoints = Array.from(waypoints); // make copy
  newWaypoints[waypoints.findIndex((x) => x.key === newWaypoint.key)] =
    newWaypoint;
  return newWaypoints;
}

export function addWaypoint(newWaypoint: Waypoint, waypoints: Waypoint[]) {
  return [...waypoints, newWaypoint];
}

export function removeWaypoint(waypoint: Waypoint, waypoints: Waypoint[]) {
  let newWaypoints = Array.from(waypoints); // make copy
  newWaypoints.splice(
    waypoints.findIndex((x) => x.key === waypoint.key),
    1
  );
  return newWaypoints;
}

export function moveWaypoint(
  waypointIndex: number,
  destinationIndex: number,
  waypoints: Waypoint[]
) {
  return arrayMove(waypoints, waypointIndex, destinationIndex);
}

export function newWaypoint(lon: number, lat: number) {
  return {
    key: uuid(),
    lat: lat,
    lon: lon,
    fullStop: true,
    active: false,
  } as Waypoint;
}
