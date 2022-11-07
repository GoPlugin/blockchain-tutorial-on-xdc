/* eslint-disable */
const Xdc3 = require("xdc3");
require("dotenv").config();

console.log("log:::privatekey:::", process.env.PRIVATE_KEY);

//Input Parameters to override
const bookName = "FinalBook";
const contractAbi = require("../build/contracts/SampleContract.json").abi;
const contractAddresss = process.env.CONTRACT_ADDRESS;

const xdc3 = new Xdc3(
    new Xdc3.providers.HttpProvider(process.env.RPC_URL)
);

async function main() {

    const deployed_private_key = process.env.PRIVATE_KEY;
    const contractInstance = new xdc3.eth.Contract(contractAbi, contractAddresss);
    // console.log("log:::contractInstance:::", contractInstance)
    const account = xdc3.eth.accounts.privateKeyToAccount(deployed_private_key);
    const nonce = await xdc3.eth.getTransactionCount(account.address);
    console.log("log:::nonce:::", nonce);
    const gasPrice = await xdc3.eth.getGasPrice();
    console.log("log:::gasPrice:::", gasPrice);

    //Prepare the transacion to sign
    const tx = {
        nonce: nonce,
        data: contractInstance.methods.addBooks(bookName).encodeABI(),
        gasPrice: gasPrice,
        to: process.env.CONTRACT_ADDRESS,
        from: account.address,
    };

    //gasLimit
    tx["gasLimit"] = 200000;

    //Sign your transaction
    const signed = await xdc3.eth.accounts.signTransaction(
        tx,
        deployed_private_key
    );

    console.log("log:::BeforeSubmit");
    //Send signed transactions
    await xdc3.eth
        .sendSignedTransaction(signed.rawTransaction)
        .once("receipt", function (receipt) {
            console.log("log:::TransactionHash:::", receipt.transactionHash);
            console.log("log:::TransactionStatus:::", receipt.status);
            //If you want to read complete receipt, then uncomment below line
            // console.log("log:::Receipt:::",receipt);
        });

    console.log("log:::AfterSubmit");
        // let status = await oraclecontract.methods.getAuthorizationStatus(pluginNode)
            // console.log("Status", status);
}

main().catch(e => console.error(e));