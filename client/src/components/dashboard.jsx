import CurrentTotals from "./CurrentTotals";
import { Stack, Box, Flex, Center, SimpleGrid } from "@chakra-ui/react";
import Bike from "./Bike";
import Bike1 from "../images/bike1.jpeg";
import Bike2 from "../images/bike2.jpeg";
import Bike3 from "../images/bike3.jpeg";
import RenterForm from "./RenterForm";
import { useContext, useState } from "react";
import { BlockchainContext } from "../context/BlockchainContext";
import ClipLoader from "react-spinners/ClipLoader";

const Dashboard = () => {
  const { renterExists, currentAccount } = useContext(BlockchainContext);
  let [loading, setLoading] = useState(true);
  return (
    <Stack
      as={Box}
      textAlign={"center"}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
    >
      {renterExists == null && currentAccount ? (
        <Center>
          <ClipLoader loading={loading} size={75} />
        </Center>
      ) : renterExists ? (
        <CurrentTotals />
      ) : (
        <RenterForm />
      )}

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 2, lg: 8 }}>
        <Bike bike={Bike1} />
        <Bike bike={Bike2} />
        <Bike bike={Bike3} />
      </SimpleGrid>
    </Stack>
  );
};
export default Dashboard;
