import React, { useState } from "react";
import { abi, contractAddress } from "../config.json";
import { ethers } from "ethers";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const BlockchainContext = React.createContext("");

const createContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  return contract;
};
export const BlockchainProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [renterExists, setRenterExists] = useState();
  const [renter, setRenter] = useState();
  const [firstName, setFirstName] = useState();
  const [renterBalance, setRenterBalance] = useState();
  const [due, setDue] = useState();
  const [duration, setDuration] = useState();

  const getAllTransaction = async () => {
    try {
      if (ethereum) {
        const contract = createContract();
      } else {
        console.log("Ether is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Please install Metamask");

      const accounts = await provider.send("eth_requestAccounts");
      console.log("accounts[0]: " + accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return alert("Please install Metamask");

      const accounts = await provider.send("eth_accounts");

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransaction();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkRenterExists = async () => {
    try {
      if (currentAccount) {
        const renter = await contract.renterExists(currentAccount);
        setRenterExists(renter);
        if (renter) {
          await getRenter();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addRenter = async (
    walletAddress,
    firstName,
    lastName,
    canRent,
    active,
    balance,
    due,
    start,
    end
  ) => {
    try {
      const addRenter = await contract.addRenter(
        walletAddress,
        firstName,
        lastName,
        canRent,
        active,
        balance,
        due,
        start,
        end
      );
      await addRenter.wait();
      checkRenterExists();
    } catch (error) {
      console.log(error);
    }
  };

  const getRenter = async () => {
    try {
      if (currentAccount) {
        const renter = await contract.getRenter(currentAccount);
        setRenter(renter);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRenterFirstName = async () => {
    try {
      if (currentAccount) {
        const firstName = await contract.getRenter(currentAccount);
        setFirstName(firstName[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRenterBalance = async () => {
    try {
      if (currentAccount) {
        const balance = await contract.balanceOfRenter(currentAccount);
        setRenterBalance(ethers.utils.formatEther(balance));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deposit = async (value) => {
    try {
      const bnbValue = ethers.utils.parseEther(value);
      const deposit = await contract.deposit(currentAccount, {
        value: bnbValue,
      });
      await deposit.wait();
      await getRenterBalance();
    } catch (error) {
      toast.error(error.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const getDue = async () => {
    try {
      if (currentAccount) {
        const due = await contract.getDue(currentAccount);
        setDue(ethers.utils.formatEther(due));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalDuration = async () => {
    try {
      if (currentAccount) {
        const totalDuration = await contract.getTotalDuration(currentAccount);
        setDuration(Number(totalDuration));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const makePayment = async (value) => {
    try {
      const bnbValue = ethers.utils.parseEther(value);
      const deposit = await contract.makePayment(currentAccount, bnbValue);
      await deposit.wait();
      await getRenter();
      await getRenterBalance();
      await getTotalDuration();
      await getDue();
    } catch (error) {
      toast.error(error.error.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const checkOut = async () => {
    try {
      const checkOut = await contract.checkOut(currentAccount);
      await checkOut.wait();
      await getRenter();
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const checkIn = async () => {
    try {
      const checkIn = await contract.checkIn(currentAccount);
      await checkIn.wait();
      await getRenter();
      await getDue();
      await getTotalDuration();
    } catch (error) {
      toast.error(error.reason, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // when the context (dashboard) loads
  useEffect(() => {
    checkIfWalletIsConnected();
    checkRenterExists();
    getRenterBalance();
    getDue();
    getTotalDuration();
    getRenterFirstName();
  }, [currentAccount]);

  return (
    <BlockchainContext.Provider
      value={{
        connectWallet,
        currentAccount,
        renterExists,
        addRenter,
        firstName,
        renterBalance,
        deposit,
        due,
        duration,
        renter,
        makePayment,
        checkOut,
        checkIn,
      }}
    >
      {children}
    </BlockchainContext.Provider>
  );
};
