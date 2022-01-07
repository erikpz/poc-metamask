import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./components/connectors";

export const Metamask = () => {
  const x = useWeb3React();
  console.log(x);
  const [fields, setfields] = useState({ address: "", amount: "" });
  const handleInputs = (e: any) => {
    setfields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleSubmit = async () => {
    /* console.log(fields);
    //@ts-ignore
    const winEther = window.ethereum;
    try {
      if (!winEther) {
        throw new Error("No wallet found");
      }
      await winEther.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(winEther);
      const signer = provider.getSigner();
      ethers.utils.getAddress(fields.address);
      const tx = await signer.sendTransaction({
        to: fields.address,
        value: ethers.utils.parseEther(fields.amount),
      });
      console.log("tx", tx);
    } catch (err: any) {
      console.log(err.message);
    } */
  };
  /* useEffect(() => {
    x.activate(injected);
  }, []); */
  return (
    <div>
      <Box>
        <Typography my={5}>POC METAMASK</Typography>
        <TextField
          name="address"
          onChange={handleInputs}
          value={fields.address}
          label="Address"
        />
        <TextField
          name="amount"
          type="number"
          onChange={handleInputs}
          value={fields.amount}
          label="Amount"
        />
        <Button onClick={handleSubmit} variant="contained">
          Send ETH
        </Button>
      </Box>
    </div>
  );
};
