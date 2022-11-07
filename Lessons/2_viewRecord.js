/* eslint-disable */
const Xdc3 = require("xdc3");
require("dotenv").config();
//Input Parameters to override
const contractAbi = require("../build/contracts/SampleContract.json").abi;
const contractAddresss = process.env.CONTRACT_ADDRESS;
const _bookId = 2;

const xdc3 = new Xdc3(
    new Xdc3.providers.HttpProvider(process.env.RPC_URL)
);

async function main() {

    const contractInstance = new xdc3.eth.Contract(contractAbi, contractAddresss);
    // console.log("log:::contractInstance:::", contractInstance)
    //Way to call your view function, if any paramters to override, then do within brackets.
    //Here bookID is input parameter for this viewBook Function, which is overriden at the top
    let result = await contractInstance.methods.viewBook(_bookId).call();
    console.log("log:::book:::",result)
}

main().catch(e => console.error(e));