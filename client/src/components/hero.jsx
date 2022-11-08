import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  let navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/demystifying%20digital%20dark%20matter%20a%20new%20standard%20to%20tame%20technical%20debt/hero-demystifying.png?mw=1536&car=8:5&cq=500)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            color={"white"}
          >
            Rent your next Bike <br />
            <Text as={"span"} color={"white"}>
              with Crypto !
            </Text>
          </Heading>
          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "lg", md: "3xl" })}
          >
            Connect your wallet ,choose your bike and you're off to the
            race.When you return it ,you can easily pay your fare with Goerli
            ETH .
          </Text>
          <Stack direction={"row"}>
            <Button
              onClick={() => handleClick("dashboard")}
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Choose My Bike
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
