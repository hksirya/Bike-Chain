import {
  Box,
  Button,
  Image,
  Text,
  Stack,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { BlockchainContext } from "../context/BlockchainContext";

const Bike = ({ bike }) => {
  const { checkOut, checkIn } = useContext(BlockchainContext);
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={bike}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text fontSize={"md"} fontFamily={"body"} fontWeight={500}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            cupiditate cumque unde modi deleniti aliquam quos, iste quibusdam
            repellendus minus doloremque molestias architecto velit numquam
            dolores fugiat quam nostrum similique.
          </Text>
          <Stack
            spacing={0}
            direction={"row"}
            align={"center"}
            justify={"center"}
            mt={5}
          >
            <Button
              onClick={checkOut}
              m={2}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"teal.500"}
              _hover={{
                bg: "teal.300",
              }}
            >
              Checkout
            </Button>
            <Button
              onClick={checkIn}
              m={2}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"teal.500"}
              _hover={{
                bg: "teal.300",
              }}
            >
              Checkin
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default Bike;
