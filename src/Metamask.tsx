import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./components/connectors";
import { ethers } from "ethers";

export const Metamask = () => {
  const { library, activate } = useWeb3React();
  const [fields, setfields] = useState({ address: "", amount: "" });
  const [active, setactive] = useState(false);
  console.log("active", active);
  const handleInputs = (e: any) => {
    setfields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleSubmit = async () => {
    console.log(fields);
    const signer = library.getSigner();
    ethers.utils.getAddress(fields.address);
    const tx = await signer.sendTransaction({
      to: fields.address,
      value: ethers.utils.parseEther(fields.amount),
    });
    console.log("tx", tx);
  };

  const handleConnect = async () => {
    await activate(injected);
    setactive(true);
  };

  return (
    <div>
      <Typography my={5} variant="h2">
        POC METAMASK
      </Typography>
      {!active ? (
        <Button variant="contained" onClick={handleConnect}>
          Conectarse a MetaMask
        </Button>
      ) : (
        <Box>
          <TextField
            name="address"
            onChange={handleInputs}
            value={fields.address}
            label="Address"
            fullWidth
            style={{
              width: "100%",
              maxWidth: 400,
              display: "flex",
              margin: " 20px auto",
            }}
          />
          <TextField
            name="amount"
            type="number"
            onChange={handleInputs}
            value={fields.amount}
            label="Amount"
            fullWidth
            style={{
              width: "100%",
              maxWidth: 400,
              display: "flex",
              margin: "20px auto",
            }}
          />
          <Button onClick={handleSubmit} variant="contained">
            Send ETH
          </Button>
        </Box>
      )}
    </div>
  );
};
