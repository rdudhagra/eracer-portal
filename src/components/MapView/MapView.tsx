import { Box } from "@chakra-ui/layout";
import "mapbox-gl/dist/mapbox-gl.css";

import React, { useRef, useState } from "react";
import MapGl, { GeolocateControl } from "react-map-gl";

import mapboxgl from "mapbox-gl";

import { useWindowSize } from "../../hooks/useWindowSize";
import { useColorModeValue } from "@chakra-ui/color-mode";

import "./mapview.scss";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export const MapView = () => {
  const colorMode = useColorModeValue("light", "dark");

  const mapContainer = useRef(null);
  const { width, height } = useWindowSize();

  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 18,
  });

  return (
    <Box flex={1} display="block" ref={mapContainer}>
      <MapGl
        mapStyle={`mapbox://styles/mapbox/${colorMode}-v10`}
        {...viewport}
        onViewportChange={(
          nextViewport: React.SetStateAction<{
            latitude: number;
            longitude: number;
            zoom: number;
          }>
        ) => setViewport(nextViewport)}
        width={width}
        height={height}
        attributionControl={false}
      >
        <GeolocateControl
          style={{ padding: 10 }}
          fitBoundsOptions={{ maxZoom: 18 }}
          auto
        />
      </MapGl>
    </Box>
  );
};
