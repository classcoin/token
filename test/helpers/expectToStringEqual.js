const { expect } = require("./chai");

module.exports = async (value, promise) => {
    let result;
    if (typeof promise == "function") {
        result = await promise();
    } else {
        result = await promise;
    }
    expect(result.toString()).to.equal(value.toString());
};
