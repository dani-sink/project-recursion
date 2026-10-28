import { mergeSort } from "./merge_sort.js";

describe("mergeSort", () => {
  // Basic functionality
  test("sorts an unsorted array of numbers in ascending order", () => {
    const input = [38, 27, 43, 3, 9, 82, 10];
    const expected = [3, 9, 10, 27, 38, 43, 82];
    expect(mergeSort(input)).toEqual(expected);
  });

  // Edge case: Empty and single-element arrays
  test("returns an empty array when given an empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("returns the same array when given a single element", () => {
    expect(mergeSort([73])).toEqual([73]);
  });

  // Pre-sorted and reverse-sorted arrays
  test("handles an already sorted array", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("sorts a reverse-sorted array", () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  // Negative numbers and duplicates
  test("handles arrays with negative numbers and duplicates", () => {
    const input = [3, -1, 5, 3, 0, -5, 2];
    const expected = [-5, -1, 0, 2, 3, 3, 5];
    expect(mergeSort(input)).toEqual(expected);
  });

  // Immutability
  test("does not mutate the original input array", () => {
    const input = [5, 2, 8, 1];
    const copy = [...input];
    mergeSort(input);
    expect(input).toEqual(copy);
  });
});
