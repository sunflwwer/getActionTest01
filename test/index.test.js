const factorial = require("../src/index");

// jest 프레임워크 사용시 describe, it 사용가능
describe("factorial function", () => {
  it("correctly computes factorial of a positive integer number", () => {
    //정상 검사
    expect(factorial(3)).toEqual(6);
    expect(factorial(5)).toEqual(120);
  });

  it("throws an error if a negative input is provided", () => {
    //오류 검사
    expect(() => {
      factorial(-1);
    }).toThrow("n must be a positive integer");
  });
});
