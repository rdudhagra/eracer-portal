import { Box } from "@chakra-ui/layout";
import "mapbox-gl/dist/mapbox-gl.css";

import { useRef, useState } from "react";
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

const POLYLINE_SMOOTHING_FACTOR = 0.5;
const POLYLINE_NUM_SEGMENTS = 1000;

export const MapView = (props: {
  waypoints: Waypoint[];
  setWaypoints: Function;
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

  const [polyline, setPolyline] = useState({} as { points: any[]; path: any });

  const makeDrivePathLayer = (pl: any) =>
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
      setPolyline({
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
        layers={[polyline.path]}
        // @ts-ignore
        ContextProvider={_MapContext.Provider}
      >
        <StaticMap
          mapStyle={`mapbox://styles/mapbox/${colorMode}-v10`}
          // mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
          width={width}
          height={height}
          attributionControl={false}
        >
          <GeolocateControl
            style={{ padding: 10, top: 70 }}
            fitBoundsOptions={{ maxZoom: 18 }}
            auto
          />
        </StaticMap>
        <Markers
          waypoints={props.waypoints}
          setWaypoints={props.setWaypoints}
        />
      </DeckGL>
    </Box>
  );
};

const Markers = (props: { waypoints: Waypoint[]; setWaypoints: Function }) => {
  const markers = useMemo(
    () =>
      props.waypoints.map((waypoint) => (
        <Marker
          key={waypoint.key}
          longitude={waypoint.lon}
          latitude={waypoint.lat}
          draggable
          onDragEnd={(event) => {
            props.setWaypoints((wps: Waypoint[]) =>
              updateWaypoint(
                { ...waypoint, lat: event.lngLat[1], lon: event.lngLat[0] },
                wps
              )
            );
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
