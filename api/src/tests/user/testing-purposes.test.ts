import { sum } from "../../modules/user";

describe("Test cases for testing-purposes file", () => {
  it("Should return the sum of two numbers", () => {

    const total = sum(10,10);

    expect(total).toBe(20);

  });

  it("Should return the sum of two numbers twice", () => {

    const total = sum(10,10);
    const total2 = sum(2,2);
    expect(total).toBe(20);
    expect(total2).toBe(4);

  });
});
