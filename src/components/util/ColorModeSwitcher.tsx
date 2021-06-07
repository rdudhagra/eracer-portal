import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const iconColor = useColorModeValue("gray.100", "gray.700")
  const bgColor = useColorModeValue("gray.700", "gray.100")
  const bgHoverColor = useColorModeValue("gray.700", "gray.200")

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color={iconColor}
      bg={bgColor}
      _hover={{ bg: bgHoverColor }}
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  )
}
