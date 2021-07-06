import * as React from "react";
import { useColorModeValue, IconButton } from "@chakra-ui/react";
import { MdMap, MdPublic } from "react-icons/md";

export const MapSatelliteSwitcher: React.FC<any> = (props: {
  satellite: boolean;
  setSatellite: Function;
  iconProps: any;
}) => {
  const SwitchIcon = props.satellite ? MdMap : MdPublic;
  const iconColor = useColorModeValue("gray.100", "gray.700");
  const bgColor = useColorModeValue("gray.700", "gray.100");
  const bgHoverColor = useColorModeValue("gray.700", "gray.200");

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color={iconColor}
      bg={bgColor}
      _hover={{ bg: bgHoverColor }}
      marginLeft="2"
      onClick={() => props.setSatellite(!props.satellite)}
      icon={<SwitchIcon />}
      aria-label={`Toggle map/satellite mode`}
      {...props.iconProps}
    />
  );
};
