import Divide from "../src/Divide";
import { expect } from "chai";

const sut = new Divide();

describe("calculator/divide", () => {
  it("should return a number when parameters are passed to `add()`", () => {
    expect(sut.divide(1, 1)).to.be.a("number");
  });
});
