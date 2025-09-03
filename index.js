const name = "Susan";
const height = 20; // Changed from 74 to 20
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};

const expect = require('chai').expect;

describe("Height", () => {
    it("is greater than 0 and less than 40", () => {
      expect(height).to.be.above(0);
      expect(height).to.be.below(40);
    });
});
