import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { Metamask } from "./Metamask";

const getLibrary = (provider: any) => {
  return new ethers.providers.Web3Provider(provider);
};

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Metamask />
      </div>
    </Web3ReactProvider>
  );
};

export default App;
