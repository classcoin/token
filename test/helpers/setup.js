const { web3 } = require("hardhat");
const getContract = require("./getContract");

module.exports = async () => {
  const accounts = await web3.eth.getAccounts();
  const currentBlock = await web3.eth.getBlock("latest");
  const deployer = accounts[0];
  const collector = accounts[1];
  const bob = accounts[2];
  const marry = accounts[3];
  const john = accounts[4];
  const wmeta = await getContract("WMETA");
  return {
    currentBlock,
    accounts,
    deployer,
    collector,
    bob,
    marry,
    john,
    wmeta,
  };
};
