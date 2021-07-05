import { Box } from "@chakra-ui/layout";
import "mapbox-gl/dist/mapbox-gl.css";

import { useRef } from "react";
import { GeolocateControl, Marker, StaticMap, _MapContext } from "react-map-gl";

import DeckGL from "@deck.gl/react";
import { PathLayer } from "@deck.gl/layers";

import mapboxgl from "mapbox-gl";

import { useWindowSize } from "../../hooks/useWindowSize";
import { useColorModeValue } from "@chakra-ui/color-mode";

import "./mapview.scss";
import {
  addWaypoint,
  newWaypoint,
  updateWaypoint,
  Waypoint,
} from "../../models/Waypoint";
import { WaypointMarker } from "../util/WaypointMarker";

import { CurveInterpolator } from "curve-interpolator";
import { useMemo } from "react";
import { useCallback } from "react";

/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved */
// @ts-ignore
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
/* eslint-enable import/no-webpack-loader-syntax, import/no-unresolved */

export const POLYLINE_SMOOTHING_FACTOR = 0.9;
export const POLYLINE_NUM_SEGMENTS = 1000;

export const makeDrivePathLayer = (pl: any) =>
  new PathLayer({
    id: "drive-path-layer",
    data: [
      {
        path: pl,
        name: "",
      },
    ],
    rounded: true,
    pickable: false,
    widthScale: 2,
    widthMinPixels: 2,
    widthMaxPixels: 6,
    getColor: [11, 197, 234],
  });

export const MapView = (props: {
  satellite: boolean;
  waypoints: Waypoint[];
  setWaypoints: Function;
  polyline: { points: any[]; path: any };
  setPolyline: Function;
}) => {
  const colorMode = useColorModeValue("light", "dark");

  const mapContainer = useRef(null);
  const { width, height } = useWindowSize();

  const viewport = {
    latitude: 0,
    longitude: 0,
    zoom: 18,
    bearing: 0,
    pitch: 0,
  };

  const onClick = useCallback((event) => {
    props.setWaypoints((wps: Waypoint[]) => {
      let newWps = addWaypoint(
        newWaypoint(event.coordinate[0], event.coordinate[1]),
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
    // eslint-disable-next-line
  }, []);

  return (
    <Box flex={1} display="block" ref={mapContainer}>
      <DeckGL
        initialViewState={viewport}
        controller={{ touchRotate: true, touchZoom: true }}
        onClick={onClick}
        layers={[props.polyline.path]}
        // @ts-ignore
        ContextProvider={_MapContext.Provider}
      >
        <StaticMap
          mapStyle={
            props.satellite
              ? "mapbox://styles/mapbox/satellite-streets-v11"
              : `mapbox://styles/mapbox/${colorMode}-v10`
          }
          width={width}
          height={height}
          attributionControl={false}
        />
        <Markers
          waypoints={props.waypoints}
          setWaypoints={props.setWaypoints}
          setPolyline={props.setPolyline}
          makeDrivePathLayer={makeDrivePathLayer}
        />
        <GeolocateControl
          style={{ padding: 10, top: 70 }}
          fitBoundsOptions={{ maxZoom: 18 }}
          auto
        />
      </DeckGL>
    </Box>
  );
};

const Markers = (props: {
  waypoints: Waypoint[];
  setWaypoints: Function;
  setPolyline: Function;
  makeDrivePathLayer: Function;
}) => {
  const markers = useMemo(
    () =>
      props.waypoints.map((waypoint) => (
        <Marker
          key={waypoint.key}
          longitude={waypoint.lon}
          latitude={waypoint.lat}
          draggable
          onDragEnd={(event) => {
            props.setWaypoints((wps: Waypoint[]) => {
              let newWps = updateWaypoint(
                { ...waypoint, lat: event.lngLat[1], lon: event.lngLat[0] },
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
                path: props.makeDrivePathLayer(pl),
              });
              return newWps;
            });
          }}
        >
          <WaypointMarker
            waypoint={waypoint}
            setWaypoints={props.setWaypoints}
            onMap
          />
        </Marker>
      )),
    [props]
  );
  return <>{markers}</>;
};
