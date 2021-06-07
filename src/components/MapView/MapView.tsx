import { Box } from "@chakra-ui/layout";
import "mapbox-gl/dist/mapbox-gl.css";

import React, { useCallback, useEffect, useRef, useState } from "react";
import MapGl, { GeolocateControl } from "react-map-gl";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useColorModeValue } from "@chakra-ui/color-mode";

import "./mapview.scss";

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
