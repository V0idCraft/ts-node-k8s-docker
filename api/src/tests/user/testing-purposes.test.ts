import { sum } from "../../modules/user";

describe("Test cases for testing-purposes file", () => {
  it("Should return the sum of two numbers", () => {

    const total = sum(10,10);

    expect(total).toBe(20);

  });
});
