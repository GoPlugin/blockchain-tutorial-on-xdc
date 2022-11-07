# Solidity Tutorial on XDC Network
## Truffle Box for XDC Network - Powered by Plugin

It is full fledge Solidity Tutorial, which will give you a clear direction on how to write your solidity Program from Beginner to Advance Level. By following this truffle box for XDC, you should be able to deploy a sample contract and play with each function using simple commands.

Each program will have sufficient comment line, and direction on how to use.

if any queries / comments, feel free to raise an issue.
Note -This repository will be getting updated periodically with lessons. If you want to see any features in advance, let us know.

# Table of Contents
- Pre-requisites
- How it works
- How to deploy
- How to call
- How to customize the script for your requirement

## pre-requisites
- nvm version 0.37.2
- npm version 7.24.0
- node version 16.10.0
- do seup XDCPay Chrome Extension in your chrome 
- Get some faucet token from here -> https://faucet.apothem.network/ 

## .env should have following parameters
- PRIVATE_KEY(of your account) to migrate the contract - Get this from XDCPay
- CONTRACT_ADDRESS = contract address, you will get after truffle migrate
- RPC_URL=https://erpc.xinfin.network (or) https://erpc.apothem.network 

## How to RUn
- do git clone & npm install

```
 npm install
```
```
truffle compile
```
- do truffle migrate, this wil deploy both consumer & oracle contract in Mainnet
```
truffle migrate --network apothem     --> for Xinfin Apothem(Test) Network
```
- Copy the contract address into .env file
- run addRecord - This will insert a record in blockchain using Web3
```
yarn addRecord
```
- run viewRecord - This will pull a specific record from Blockchain using Web3
```
yarn viewRecord
```
- run readEvents - This will pull event details
```
yarn readEvents
```
######  Read LICENSE