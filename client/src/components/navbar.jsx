import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { BlockchainContext } from "../context/BlockchainContext";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { connectWallet, currentAccount } = useContext(BlockchainContext);

  return (
    <Box>
      <Flex
        bg={"black"}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={"white"}
            fontWeight={900}
            fontSize={"x-large"}
          >
            <Link to="/">BikeChain</Link>
          </Text>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            onClick={connectWallet}
            px={4}
            fontSize={"sm"}
            rounded={"full"}
            bg={"white"}
            color={"black"}
            boxShadow={"1px 1px 20px 0 rgb(212 237 255 / 60%)"}
            _hover={{
              bg: "blue.500",
              color: "white",
            }}
            _focus={{
              bg: "blue.500",
              color: "white",
            }}
          >
            {!currentAccount
              ? "Connect Wallet"
              : `${currentAccount.slice(0, 5)}...${currentAccount.slice(
                  currentAccount.length - 4
                )}`}
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}

const NAV_ITEMS = [];
