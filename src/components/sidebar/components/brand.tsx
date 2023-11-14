// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "@/components/icons/icons";
import { HSeparator } from "@/components/separator/separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      <HorizonLogo h="26px" w="175px" my="32px" color={logoColor} />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
