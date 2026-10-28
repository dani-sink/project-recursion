# Recursion

Fibonacci and merge sort implemented in JavaScript, built as The Odin Project's recursion exercise. The focus is practicing recursive thinking — a base case plus a recursive step — and comparing an iterative solution against its recursive counterpart.

## Functions

- **`fibs(n)`** — _iterative._ Returns an array of the first `n` Fibonacci numbers.
  `fibs(8)` → `[0, 1, 1, 2, 3, 5, 8, 13]`
- **`fibsRec(n)`** — _recursive._ Same result as `fibs`, solved with recursion.
  `fibsRec(8)` → `[0, 1, 1, 2, 3, 5, 8, 13]`
- **`mergeSort(array)`** — _recursive._ Returns a new sorted array using the merge sort algorithm (split the array in half, sort each half recursively, merge the two sorted halves).
  `mergeSort([3, 2, 1, 13, 8, 5, 0, 1])` → `[0, 1, 1, 2, 3, 5, 8, 13]`

Each function has its own **Jest unit tests** covering normal cases and edge cases (empty array, single element, already-sorted input).

## What it demonstrates

- **Recursion** — base case vs. recursive case, and reducing a problem to smaller sub-problems
- **Iterative vs. recursive** — the same Fibonacci problem solved both ways (and the tradeoffs: recursion is cleaner to read, but uses a call stack frame per call)
- **Divide and conquer** — merge sort as a classic recursive algorithm
- **Unit testing with Jest** — each function verified against normal and edge cases

## Running it

```bash
git clone https://github.com/dani-sink/project-recursion.git
cd project-recursion
npm install         # installs Jest
npm test            # run the unit tests
node <file>.js      # run a function directly, e.g. node fibonacci.js
```

## What I learned

- Implementing fibs before fibsRec made the base-case / recursive-step structure more clear to me.
- mergeSort clicked once I trusted the recursive leap of faith (assume the sub-sorts work, just merge them).
- Learned to use other subroutines inside a recursive function to keep the recursion going.
