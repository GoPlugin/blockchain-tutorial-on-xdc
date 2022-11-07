const sample = artifacts.require("SampleContract");
require("dotenv").config();
module.exports = async function (deployer) {
    deployer.deploy(sample);
};