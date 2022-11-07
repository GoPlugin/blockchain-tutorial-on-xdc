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
  },
  {
    address: 'xdc831C99Bf551C98b7F7aeC1a58932c91fE457B93d',
    blockNumber: 41103772,
    transactionHash: '0xb18763f1932e00f0b61fd7cc312bfdddc34df6f3da574b0f5505c947c1e82a8c',
    transactionIndex: 1,
    blockHash: '0x8bd280b39532c385de6bafb2cb5089d4b438de251fa9f3d664b45bc8b8f3f58e',
    logIndex: 1,
    removed: false,
    id: 'log_a46ce316',
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
  },
  {
    address: 'xdc831C99Bf551C98b7F7aeC1a58932c91fE457B93d',
    blockNumber: 41103927,
    transactionHash: '0xf78788dce353d4682498b9ea7882309bc5442c8905260782e1fa1aea0edd9760',
    transactionIndex: 1,
    blockHash: '0x3d2c8494b35ee18275af2946719e0b8b8d2323a3deb085d27ad591a14a923aab',
    logIndex: 1,
    removed: false,
    id: 'log_c9b1d69d',
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
  },
  {
    address: 'xdc831C99Bf551C98b7F7aeC1a58932c91fE457B93d',
    blockNumber: 41103981,
    transactionHash: '0x4305c26842349daf564e7462a001a45ddccf53aa112f4139a5dc3b94a4e02b3a',
    transactionIndex: 1,
    blockHash: '0xe912f5bb5dc6ca8e7f9dafbf3267a5c434c8fee01267acc93028fb4dc6628b09',
    logIndex: 1,
    removed: false,
    id: 'log_4573c6c0',
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
  },
  {
    address: 'xdc831C99Bf551C98b7F7aeC1a58932c91fE457B93d',
    blockNumber: 41104799,
    transactionHash: '0xf12114da75648fe3e5820194a2ed85b0391aa0d11007be8015612ea64cc724f1',
    transactionIndex: 1,
    blockHash: '0xa7d1ab16b4d17517a09b195091e0ffd2ed6673a4956dd6915902bf2af970ad3f',
    logIndex: 1,
    removed: false,
    id: 'log_29588494',
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
  },
  {
    address: 'xdc831C99Bf551C98b7F7aeC1a58932c91fE457B93d',
    blockNumber: 41109885,
    transactionHash: '0xff07ee7cbd2bfd9a530debc94e8393867359e3b2262ecebd512b4357903fa9db',
    transactionIndex: 1,
    blockHash: '0x191180396892658c1caae812f45f8c80115b8059babdb225c1c7fb3534685199',
    logIndex: 1,
    removed: false,
    id: 'log_8acb0206',
    returnValues: Result {
      '0': 'FinalBook',
      '1': '0x4e1945cEc2539a9be460aB0aa7BdC1EADebde75e',
      bookName: 'FinalBook',
      addedBy: '0x4e1945cEc2539a9be460aB0aa7BdC1EADebde75e'
    },
    event: 'BookAdded',
    signature: '0x7984f0b1aa1b5583636f2c20e9a44dfc9022c74fc8ea5635255b73be4369ae23',
    raw: {
      data: '0x00000000000000000000000000000000000000000000000000000000000000400000000000000000000000004e1945cec2539a9be460ab0aa7bdc1eadebde75e000000000000000000000000000000000000000000000000000000000000000946696e616c426f6f6b0000000000000000000000000000000000000000000000',
      topics: [Array]
    }
  }
]
```
######  Read LICENSE
