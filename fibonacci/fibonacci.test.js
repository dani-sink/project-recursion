import { fibs, fibsRec } from "./fibonacci.js";

const testCases = [
  { n: 0, expected: 0 },
  { n: 1, expected: 1 },
  { n: 2, expected: 1 },
  { n: 3, expected: 2 },
  { n: 5, expected: 5 },
  { n: 7, expected: 13 },
  { n: 10, expected: 55 },
];

describe("Fibonacci Iterative", () => {
  test.each(testCases)("returns $expected for n = $n", ({ n, expected }) => {
    expect(fibs(n)).toBe(expected);
  });

  test("returns null for negative input", () => {
    expect(fibs(-5)).toBeNull();
  });

  test("handles larger iterative values efficiently", () => {
    expect(fibs(20)).toBe(6765);
  });
});

describe("Fibonacci Recursive", () => {
  test.each(testCases)("returns $expected for n = $n", ({ n, expected }) => {
    expect(fibsRec(n)).toBe(expected);
  });

  test("returns null for negative input", () => {
    expect(fibsRec(-5)).toBeNull();
  });

  test("handles larger iterative values efficiently", () => {
    expect(fibsRec(20)).toBe(6765);
  });
});
