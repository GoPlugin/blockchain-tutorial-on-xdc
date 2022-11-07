# Solidity Tutorial on XDC Network
## Truffle Box for XDC Network - Powered by Plugin

This tutorial will give you a clear direction on how to write your solidity Program from Beginner to Advance Level on XDC Network. By following this truffle box for XDC, you should be able to deploy a sample contract and play with each function using simple yarn commands.

Each lessons will have sufficient comment line, and direction on how to use.

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

## .env should have following parameters
- PRIVATE_KEY(of your account) to migrate the contract
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
truffle migrate --network xinfin     --> for Xinfin Mainnet
```
- Copy the contract address into .env file
- run addRecord - This will insert a record in blockchain using Web3
```
yarn addRecord
```
Sample output
```
log:::privatekey::: 
log:::nonce::: 342
log:::gasPrice::: 250000000
log:::BeforeSubmit
log:::TransactionHash::: 0xff07ee7cbd2bfd9a530debc94e8393867359e3b2262ecebd512b4357903fa9db
log:::TransactionStatus::: true
log:::AfterSubmit
```

- run viewRecord - This will pull a specific record from Blockchain using Web3
```
yarn viewRecord
```
Sample Output
```
log:::book::: Result {
  '0': '2',
  '1': '0x4e1945cEc2539a9be460aB0aa7BdC1EADebde75e',
  '2': 'MyFirstBook'
}
```
- run readEvents - This will pull event details
```
yarn readEvents
```
```
log:::event:::returnValues [
  {
    address: 'xdc831C99Bf551C98b7F7aeC1a58932c91fE457B93d',
    blockNumber: 41103748,
    transactionHash: '0x7174003c43ec3dd43a159ae1ba6ea6ee93fc70495bc513c795bd7d06ec58dd5f',
    transactionIndex: 1,
    blockHash: '0xc7e31485495b921060c18bd4030ce1afe9d87b3c7c1653d5f96cbbcc4f282211',
    logIndex: 1,
    removed: false,
    id: 'log_476d3cae',
    returnValues: Result {
      '0': 'MyFirstBook',
      '1': '0x4e1945cEc2539a9be460aB0aa7BdC1EADebde75e',
      bookName: 'MyFirstBook',
      addedBy: '0x4e1945cEc2539a9be460aB0aa7BdC1EADebde75e'
    },
    event: 'BookAdded',
    signature: '0x7984f0b1aa1b5583636f2c20e9a44dfc9022c74fc8ea5635255b73be4369ae23',
    raw: {
      data: '0x00000000000000000000000000000000000000000000000000000000000000400000000000000000000000004e1945cec2539a9be460ab0aa7bdc1eadebde75e000000000000000000000000000000000000000000000000000000000000000b4d794669727374426f6f6b000000000000000000000000000000000000000000',
      topics: [Array]
    }
  }
]
```
######  Read LICENSE
