const { deployments, web3 } = require("hardhat");

const helpers = require("./helpers");

const toWei = web3.utils.toWei;

describe("WMETA", async () => {
  beforeEach(async () => {
    await deployments.fixture();
  });

  it("should wrap() (1)", async () => {
    const { wmeta, bob } = await helpers.setup();
    await wmeta.methods["wrap()"]({ from: bob, value: toWei("10") });
    await helpers.expectToBalanceOfEqual(wmeta, bob, toWei("10"));
  });

  it("should wrap() (2)", async () => {
    const { wmeta, bob, marry } = await helpers.setup();
    await wmeta.methods["wrap(address)"](marry, {
      from: bob,
      value: toWei("10"),
    });
    await helpers.expectToBalanceOfEqual(wmeta, marry, toWei("10"));
  });

  it("should unwrap() (1)", async () => {
    const { wmeta, bob } = await helpers.setup();
    await wmeta.methods["wrap()"]({ from: bob, value: toWei("10") });
    await wmeta.methods["unwrap(uint256)"](toWei("10"), { from: bob });
    await helpers.expectToBalanceOfEqual(wmeta, bob, toWei("0"));
  });

  it("should unwrap() (2)", async () => {
    const { wmeta, bob, marry } = await helpers.setup();
    await web3.eth.sendTransaction({
      from: bob,
      to: wmeta.address,
      value: toWei("10"),
    });
    await wmeta.mint(marry, toWei("10"));
    await wmeta.methods["unwrap(uint256)"](toWei("10"), { from: marry });
  });

  it("should unwrap() (3)", async () => {
    const { wmeta, bob, marry } = await helpers.setup();
    await wmeta.methods["wrap()"]({ from: bob, value: toWei("10") });
    await wmeta.methods["unwrap(uint256,address)"](toWei("10"), marry, {
      from: bob,
    });
    await helpers.expectToBalanceOfEqual(wmeta, bob, toWei("0"));
    helpers.expectToStringEqual(
      await web3.eth.getBalance(marry),
      toWei("10010")
    );
  });
});
