import { Box, BoxProps } from "@chakra-ui/react";
import * as React from "react";
import NextImage from "next/image";

// Use BoxProps from Chakra UI
interface ImageProps extends BoxProps {
  src: StaticImageData | string;
  alt: string;
}

export const Image: React.FC<ImageProps> = (props) => {
  const { src, alt, ...rest } = props;

  return (
    <Box overflow="hidden" position="relative" {...rest}>
      <NextImage objectFit="cover" layout="fill" src={src} alt={alt} />
    </Box>
  );
};
