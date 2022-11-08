import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({ children, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      backgroundColor={"black"}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Text
          textAlign={"center"}
          fontFamily={"heading"}
          color={"white"}
          fontWeight={900}
          fontSize={"x-large"}
        >
          <Link to="/">BikeChain</Link>
        </Text>
        <Stack direction={"row"} spacing={6} color={"white"}>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Rent</Link>
          <Link href={"#"}>Contact</Link>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"white"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text color={"white"}>© 2022 BikeChain. All rights reserved</Text>
          <Stack direction={"row"} spacing={6} color={"white"}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
