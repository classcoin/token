module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer, dev } = await getNamedAccounts()
  const { deploy } = deployments;
  await deploy("CLASS", {
    from: deployer,
    args: [dev],
    log: true,
  });
};
module.exports.tags = ["CLASS"];
