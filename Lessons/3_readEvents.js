/* eslint-disable */
const Xdc3 = require("xdc3");
require("dotenv").config();
const contractAbi = require("../build/contracts/SampleContract.json").abi;
const contractAddresss = process.env.CONTRACT_ADDRESS;
const xdc3 = new Xdc3(
    new Xdc3.providers.HttpProvider(process.env.RPC_URL)
);

async function main() {
    const contractInstance = new xdc3.eth.Contract(contractAbi, contractAddresss);
    // console.log("log:::contractInstance:::", contractInstance)
    //here Event name is "BookAdded", below function will retrieve all events occured in the past till latest block
    await contractInstance.getPastEvents('BookAdded', {
        fromBlock: 0,
        toBlock: 'latest'
    })
    .then(function(events){
        console.log("log:::event:::returnValues",events) 
    });
}

main().catch(e => console.error(e));